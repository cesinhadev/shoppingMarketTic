import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const inputVariants = tv({
	base: "rounded bg-gray-200 w-full p-2 outline-none",
	variants: {
		variant: {
			primary:"bg-gray-200",
			secundary:"bg-white"
		},
	},
	defaultVariants:{
		variant:"primary",
	},
});

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputVariants>;

const Input = ({onChange, variant, className, ...props}: InputProps) => {
	const classInput = twMerge(inputVariants({variant}), className)
	return(
		<div>
			<input
			  onChange={onChange}
				className={classInput} 
				placeholder="Search..."
				{...props}
				/>
		</div>
	);
};

export default Input;