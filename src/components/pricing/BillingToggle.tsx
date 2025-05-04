
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface BillingToggleProps {
  value: string;
  onValueChange: (value: string) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ value, onValueChange }) => {
  const handleToggle = (checked: boolean) => {
    onValueChange(checked ? "annually" : "monthly");
  };

  return (
    <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
      <Label
        htmlFor="billing-toggle"
        className={`cursor-pointer px-4 py-2 rounded-full ${
          value === "monthly"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        Monthly
      </Label>
      
      <Switch
        id="billing-toggle"
        checked={value === "annually"}
        onCheckedChange={handleToggle}
      />
      
      <Label
        htmlFor="billing-toggle"
        className={`cursor-pointer px-4 py-2 rounded-full ${
          value === "annually"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        Annually
      </Label>
    </div>
  );
};

export default BillingToggle;
