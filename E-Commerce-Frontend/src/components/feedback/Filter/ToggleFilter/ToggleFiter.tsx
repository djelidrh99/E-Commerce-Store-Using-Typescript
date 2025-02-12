import { Button, ButtonGroup } from "@chakra-ui/react";
import AccordionComponenet from "@components/feedback/Accordion/AccordionComponenet";
import { useState } from "react";
import style from "./style.module.css";

const { buttonStyle, activeButtonStyle } = style;

const ToggleFiter = () => {
  const [selected, setIsSelected] = useState("");

  const buttonList = ["one", "two", "three"];

  const handelSelected = (value: string) => {
    setIsSelected(value);
  };
  return (
    <AccordionComponenet title="Categories">
      <ButtonGroup className="flex flex-wrap" size="sm" variant="outline">
        {buttonList.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                handelSelected(item);
              }}
              className={selected === item ? activeButtonStyle : buttonStyle}
            >
              {item}
            </Button>
          );
        })}
      </ButtonGroup>
    </AccordionComponenet>
  );
};

export default ToggleFiter;
