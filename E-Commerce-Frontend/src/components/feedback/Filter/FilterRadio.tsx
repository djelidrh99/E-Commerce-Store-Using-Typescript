import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { useState } from "react";
import "./style.module.css";
import style from "./style.module.css";

const { accordionContainer, radioButton } = style;
const customeChecked = {
  bg: "rgb(245 245 245)",
  color: "rgb(208 148 35) !important",
};

export default function FilterRadio() {
  const [value, setValue] = useState("1");
  return (
    <AccordionRoot collapsible defaultValue={["1"]}>
      <AccordionItem className={accordionContainer} value={"1"}>
        <AccordionItemTrigger className="text-black font-bold">
          Categories
        </AccordionItemTrigger>
        <AccordionItemContent className="text-black px-1 mt-2">
          <RadioGroup value={value} onValueChange={(e) => setValue(e.value)}>
            <HStack className="!flex-col !items-start" gap="3">
              <Radio
                _checked={customeChecked}
                className={radioButton}
                value="1"
              >
                Option 1
              </Radio>
              <Radio
                _checked={customeChecked}
                className={radioButton}
                value="2"
              >
                Option 2
              </Radio>
              <Radio
                _checked={customeChecked}
                className={radioButton}
                value="3"
              >
                Option 3
              </Radio>
            </HStack>
          </RadioGroup>
        </AccordionItemContent>
      </AccordionItem>
    </AccordionRoot>
  );
}
