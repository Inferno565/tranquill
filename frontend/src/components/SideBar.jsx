import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { LogOutIcon, MenuIcon, LogInIcon } from "lucide-react";
import { Menu } from "./Menu";
import { Button } from "./ui/button";
export default function SideBar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Tranquill Logo</SheetTitle>
            {/* <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription> */}
          </SheetHeader>
          <Accordion type="single" collapsible className="p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Some Menu Content</AccordionTrigger>
              <AccordionContent>Sub Content</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Some Menu Content</AccordionTrigger>
              <AccordionContent>Sub Content</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Some Menu Content</AccordionTrigger>
              <AccordionContent>Sub Content</AccordionContent>
            </AccordionItem>
          </Accordion>
          <SheetFooter>
            <Button>
              Log Out
              <LogOutIcon />{" "}
            </Button>
            <Button>
              Log In
              <LogInIcon />{" "}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
