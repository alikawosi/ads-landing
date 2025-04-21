
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BillingToggleProps {
  value: string;
  onValueChange: (value: string) => void;
}

export class BillingToggle extends React.Component<BillingToggleProps> {
  render() {
    const { value, onValueChange } = this.props;
    
    return (
      <Tabs defaultValue={value} className="w-[300px] mx-auto" onValueChange={onValueChange}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annually">Annually</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Billed monthly</p>
        </TabsContent>
        <TabsContent value="annually">
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Billed annually, save 20%</p>
        </TabsContent>
      </Tabs>
    );
  }
}

export default BillingToggle;
