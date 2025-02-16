import { Button, ButtonGroup } from "@chakra-ui/react";
import AccordionComponenet from "@components/feedback/Accordion/AccordionComponenet";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import style from "./style.module.css";
import GridList from "@/components/common/GridList/GridList";

const { buttonStyle, activeButtonStyle } = style;

type TToggleFilterProps = {
  productByMatrial: string[];
};

const ToggleFiter = ({ productByMatrial }: TToggleFilterProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const handelSelected = (value: string) => {
    navigate(`/products/${value}`);
  };

  return (
    <AccordionComponenet title="Categories">
      <ButtonGroup className="flex flex-wrap" size="sm" variant="outline">
        <GridList
          itemArray={productByMatrial}
          callBackFunc={(item) => (
            <Button
              key={item}
              onClick={() => {
                handelSelected(item);
              }}
              className={
                params.prefixId === item ? activeButtonStyle : buttonStyle
              }
            >
              {item}
            </Button>
          )}
        />
      </ButtonGroup>
    </AccordionComponenet>
  );
};

export default ToggleFiter;
