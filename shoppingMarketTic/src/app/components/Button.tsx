import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
	base: "w-full rounded py-2 px-4 text-sm font-bold text-white transition-colors ease-in-out",
	variants: {
		variant: {
			primary:
				"bg-blue-400 px-4 py-2 hover:bg-blue-800",
			secundary: "bg-red-500 text-white hover:bg-red-700 hover:text-gray",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

type PropsButton = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>;

const Button = ({ className, children, variant, ...props }: PropsButton) => {
	const classButton = twMerge(buttonVariants({ variant }), className);
	return (
		<button className={classButton} {...props}>
			{children}
		</button>
	);
};

export default Button;
