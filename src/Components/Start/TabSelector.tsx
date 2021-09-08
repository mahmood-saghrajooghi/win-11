
import React, { useRef, useState } from 'react';

const TabSelector: React.FC<{
	className?: string
	items: { value: string, label: string }[];
	onChange: (a: any) => any
}> = ({
	className,
	items,
	onChange
}) => {
		const container = useRef<HTMLDivElement>(null);
		const [offsetLeft, setOffsetLeft] = useState<number>(-3);
		const [width, setWidth] = useState<number>(21);

		const itemClickHandler = (value: string) => {
			const items = document.querySelectorAll(".tab-item");
			const item = Array.from(items).filter(item => item.getAttribute('data-value') === value)[0] as HTMLDivElement;

			setOffsetLeft(item.offsetLeft);
			setWidth(item.offsetWidth);

			onChange(value);
		}

		return (
			<div className={"flex justify-content-between position-relative " + className} ref={container}>
				{
					items.map(item => {
						return <div data-value={item.value} className="tab-item c-pointer" onClick={() => { itemClickHandler(item.value) }}><span className="u-select-none p-none">{item.label}</span></div>;
					})
				}
				<div className="b-border transition-300ms" style={{ width: width + 6, left: offsetLeft - 3 }}></div>
			</div>
		)
	}

export default TabSelector;