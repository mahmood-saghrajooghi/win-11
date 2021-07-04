import { HTMLTable, PopoverPosition } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { matchSorter } from 'match-sorter';
import React, { useEffect, useMemo, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaFilter, FaSearch, FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { MdSync } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Cell, useFilters, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';
import { setSelectedRows, setSelectedRowToggle } from "../../store/actions/layoutActions";
import { SelectedRowsConfig } from "../../store/types/layoutTypes";
import FormGroup from '../Form/FormGroup';
import Input from '../Form/Input';

interface Props {
  title?: {
    text: string;
    icon: any;
  };
  data?: any;
  columns: {
    accessor: string,
    Header: string,
  }[];
  config?: {
    filter?: boolean;
    sort?: boolean;
    pagination?: boolean;
    selectable?: boolean;
    header?: boolean;
    colorTheme?: string;
  };
  sortConfig?: any;
  loading?: boolean;
  reloadData?: () => void,
  selectedRowsConfig?: SelectedRowsConfig;
  className?: {
    wrapper?: string;
    table?: string
  }
}

function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
  return matchSorter(rows, filterValue, { keys: [(row: any) => row.values[id]] })
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter, d },
}: any) {
  const count = preFilteredRows.length
  return (
    <FormGroup
      className="ml-auto mb-0">
      <Input
        className="no-focus-effect"
        small
        placeholder={`Search ${count} records...`}
        icon={<FaSearch />}
        changed={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        value={filterValue || ''}
      />
    </FormGroup>
  )
}

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

const Table: React.FC<Props> = ({ title, columns, data, sortConfig, loading, reloadData, selectedRowsConfig, config, className }) => {
  const dispatch = useDispatch();
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns])
  // @ts-ignore: Unreachable code error
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows: any, id: any, filterValue: any) => {
        return rows.filter((row: any) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  )
  const tableInstance = useTable(
    {
      data: tableData,
      columns: tableColumns,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: sortConfig,
      },
      filterTypes,
      defaultColumn
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      if (config?.selectable || typeof config?.selectable === 'undefined')
        hooks.visibleColumns.push(columns => [
          // Let's make a column for selection
          {
            id: 'selection',
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ])
    }
  );

  // @ts-ignore: Unreachable code error
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // pagination 
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    toggleAllRowsSelected,
    selectedFlatRows,
    // filter
    setGlobalFilter,
    // sort
    setSortBy,
    state: {
      pageIndex
    }
  } = tableInstance


  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const globalFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilterValue(e.currentTarget.value);
    setGlobalFilter(e.currentTarget.value)
  }

  useEffect(() => {
    if (selectedRowsConfig)
      dispatch(setSelectedRowToggle(toggleAllRowsSelected));
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (selectedRowsConfig)
      dispatch(setSelectedRows({ config: selectedRowsConfig, rows: selectedFlatRows }));
    // eslint-disable-next-line
  }, [selectedFlatRows])

  return (
    <div className={["table-wrapper color-select", className?.wrapper].join(' ')}>
      {
        config?.header || typeof config?.header === 'undefined'
          ? <div className="mb-1 table-heading">
            <h2>
              {title?.icon}
              {title?.text}
            </h2>
            <FormGroup className="ml-auto mb-0">
              <Input
                className="no-focus-effect"
                small
                placeholder="ID, Name, Date..."
                icon={<FaSearch />}
                changed={globalFilterHandler}
                value={globalFilterValue} />
            </FormGroup>
          </div>
          : null
      }
      <HTMLTable condensed interactive striped className={["table-root", className?.table].join(' ')}{...getTableProps()} >
        <thead>
          {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <>
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map(column => {
                      return (
                        // @ts-ignore: Unreachable code error
                        <th {...column.getHeaderProps()} style={{ ...column.style, paddingRight: (config?.filter || typeof config?.filter === "undefined") ? "1.5rem" : null }}>
                          <div className="d-flex align-items-center">
                            {
                              ((config?.sort || typeof config?.sort === 'undefined') && column.canSort)
                                ? column.isSorted
                                  ? column.isSortedDesc
                                    ? <FaSortUp className="sort-icon"
                                      onClick={() => {
                                        setSortBy([{ id: column.id, desc: !column.isSortedDesc }, ...sortConfig]);
                                      }} />
                                    : <FaSortDown className="sort-icon"
                                      onClick={() => {
                                        setSortBy([{ id: column.id, desc: !column.isSortedDesc }, ...sortConfig]);
                                      }} />
                                  : <FaSort className="sort-icon"
                                    onClick={() => {
                                      setSortBy([{ id: column.id, desc: column.isSortedDesc }, ...sortConfig]);
                                    }} />
                                : ""
                            }
                            {// Render the header
                              column.render('Header')
                            }

                            {
                              (config?.filter || typeof config?.filter === 'undefined') && column.canFilter
                                ? <>
                                  <Popover2 position={PopoverPosition.BOTTOM} content={
                                    <div className="column-filter-content-wrapper">
                                      {column.render('Filter')}
                                    </div>
                                  }>
                                    <FaFilter className="filter-icon" />
                                  </Popover2>
                                  <div>
                                  </div>
                                </> : null
                            }
                          </div>
                        </th>



                      )
                    })}
                </tr>

              </>
            ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {
            page.map((row: any, i: number) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: Cell, i: number) => {
                    // @ts-ignore: Unreachable code error
                    return <td {...cell.getCellProps()} style={cell.column.style}>
                      {
                        // @ts-ignore: Unreachable code error
                        cell.column.customRender ? <cell.column.customRender>{(cell.render("Cell"))}</cell.column.customRender> : cell.render("Cell")
                      }
                    </td>
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </HTMLTable >

      {config?.pagination || typeof config?.pagination === "undefined"
        ?
        <footer>
          <div className="counter">
            <div>
              Showing <span>1 - {page.length}</span> of {data.length}
              <button
                onClick={reloadData}
                className="reload-btn">
                <MdSync className={["icon", loading ? "loading" : ""].join(' ')} />
              </button>
            </div>
          </div >
          <div className="pagination-container">
            <ul className="pagination-list">
              <li className="pagination-list-item">
                <button
                  className={["pagination-btn navigation-btn", canPreviousPage ? "" : "disabled"].join(" ")}
                  onClick={previousPage}
                >
                  <FaChevronLeft className="icon" />
                </button>
              </li>
              {
                pageOptions.map((pageNum) => {
                  return <li
                    className={[
                      "pagination-list-item",
                      pageNum === pageIndex
                        ? "active"
                        : ""
                    ].join(' ')}
                    key={"pagination" + pageNum}
                  >
                    <button className="pagination-btn" onClick={() => gotoPage(pageNum)}>
                      {pageNum + 1}
                    </button>
                  </li>
                })
              }
              <li className="pagination-list-item">
                <button
                  className={["pagination-btn navigation-btn", canNextPage ? "" : "disabled"].join(" ")}
                  onClick={nextPage}
                >
                  <FaChevronRight className="icon" />
                </button>
              </li>
            </ul>
          </div>
        </footer>
        : null
      }
    </div>
  )
}

export default Table;