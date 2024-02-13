"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/src/components/shadcn/library/utils";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/src/components/shadcn/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/ui/popover";

interface CategorySelectProps {
  value: string;
  onChange: (newValue: string) => void;
}

import categories from "@/public/category.json";

export const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const { value, onChange } = props;

  const [open, setOpen] = React.useState<boolean>(false);
  const onToggle = () => setOpen(!open);

  return (
    <Popover open={open} onOpenChange={onToggle}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? Object.values(categories).find(
                (categories) => categories.value === value,
              )?.label
            : "Select categories..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandEmpty>No categories found.</CommandEmpty>
          <CommandGroup>
            {Object.values(categories).map((categories) => (
              <CommandItem
                key={categories.value}
                value={categories.value}
                onSelect={(currentValue) => {
                  onChange(currentValue);
                  onToggle();
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === categories.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {categories.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
