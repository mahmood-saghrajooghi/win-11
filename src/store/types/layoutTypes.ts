export type SelectedRowsConfig = {
  delete: (id: string[]) => void;
  title: (values: any) => string
  idAccessor: string;
}

export interface Layout {
  selectedRows: { values: any }[];
  selectedRowsConfig: SelectedRowsConfig | null;
  selectedRowToggle: (props: boolean) => any;
}