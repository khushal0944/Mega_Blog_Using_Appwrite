import React, { forwardRef, useId } from "react";

function Select({ options = [], label, classname = "", ...props }, ref) {
	const id = useId();
	return (
		<div className="w-full">
			{label && <label htmlFor={id} className="text-white">{label} : </label>}
			<select
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
				id={id}
				ref={ref}
                defaultValue={options[0]}
				{...props}
			>
				{options?.map((option) => {
					return <option key={option} value={option}>
						{option}
					</option>;
				})}
			</select>
		</div>
	);
}

export default forwardRef(Select);

