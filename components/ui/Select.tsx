import React from "react";
import * as Select from "@radix-ui/react-select";
// import { CaretDropdown } from "./SvgAsset/GeneralAsset";
import clsx from "clsx";
import { CaretDropdown } from "./SvgAssets/GeneralAsset";

export default function SelectInput({
    placeholder = "Select an option",
    items,
    value,
    onValueChange
}: Readonly<{
    placeholder?: string;
    value?:string,
    onValueChange?:(value:string)=>void
    items: string[];
}>) {
    return (
        <Select.Root value={value} onValueChange={onValueChange}>
            <Select.Trigger
                className="inline-flex h-10 w-fit border border-[#D0D5DD] items-center justify-between gap-1.25 rounded-md bg-white px-3.75 leading-none outline-none"
                aria-label="stages"
            >
                {/* <Select.Value asChild>
  <span className="capitalize text-gray-700">{value || placeholder}</span>
</Select.Value> */}
<Select.Value
  className="capitalize text-gray-700"
  placeholder={placeholder}
/>


                {/* <Select.Value className="capitalize" placeholder={placeholder} /> */}
                <Select.Icon className="text-violet">
                    <CaretDropdown />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content align="start" className="z-50 shadow-md w-[var(--radix-select-trigger-width)] bg-white rounded-md" position="popper" sideOffset={5}>
                    <Select.Viewport className="p-2 w-full">
                        {items.map((val) => (
                            <SelectItem key={val} value={val} className="capitalize w-full">{val}</SelectItem>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>

        </Select.Root>
    );
}

type SelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item> & {
    children: React.ReactNode;
    className?: string;
};

const SelectItem = React.forwardRef<
    React.ElementRef<typeof Select.Item>,
    SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
    return (
        <Select.Item
            className={clsx(
                "relative flex h-[30px] select-none items-center data-[highlighted]:bg-[#0D6EFD] data-[highlighted]:text-white rounded-[3px] pl-[25px] pr-[35px]  leading-none text-gray-700 data-[highlighted]:bg-violet9 ",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 inline-flex w-6.25 items-center justify-center">
                {/* Optional: Checkmark icon */}
            </Select.ItemIndicator>
        </Select.Item>
    );
});

SelectItem.displayName = "SelectItem";


