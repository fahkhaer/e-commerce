"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

type CheckboxAllProps = {
  items: string[];
  onChange?: (values: string[]) => void;
};

export default function CheckboxAll({ items, onChange }: CheckboxAllProps) {
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

  const allChecked = checkedItems.length === items.length;

  const handleAllChange = (checked: boolean) => {
    let newValues: string[] = [];
    if (checked) {
      newValues = items;
    } else {
      newValues = [];
    }
    setCheckedItems(newValues);
    onChange?.(newValues);
  };

  const handleItemChange = (item: string, checked: boolean) => {
    let newValues: string[];
    if (checked) {
      newValues = [...checkedItems, item];
    } else {
      newValues = checkedItems.filter((i) => i !== item);
    }
    setCheckedItems(newValues);
    onChange?.(newValues);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Checkbox All */}
      <div className="flex items-center gap-3">
        <Checkbox
          id="all"
          checked={allChecked}
          onCheckedChange={(val) => handleAllChange(val === true)}
        />
        <Label htmlFor="all">All</Label>
      </div>

      {/* Checkbox Items */}
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <Checkbox
            id={item}
            checked={checkedItems.includes(item)}
            onCheckedChange={(val) => handleItemChange(item, val === true)}
          />
          <Label htmlFor={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Label>
        </div>
      ))}
    </div>
  );
}
