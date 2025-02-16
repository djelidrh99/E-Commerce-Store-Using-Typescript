import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import "./style.module.css";
import style from "./style.module.css";
import AccordionComponenet from "../../Accordion/AccordionComponenet";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import GridList from "@/components/common/GridList/GridList";

const { radioButton } = style;
const customeChecked = {
  bg: "rgb(245 245 245)",
  color: "rgb(208 148 35) !important",
};

type TRadioFilterProps = {
  productsFullInfo: { categoryTitle: string; cat_prefix: string }[];
};

export default function FilterRadio({ productsFullInfo }: TRadioFilterProps) {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <AccordionComponenet title="Categories">
      <RadioGroup
        value={params.prefixId}
        onValueChange={(e) => {
          navigate(`/products/${e.value}`);
        }}
      >
        <HStack className="!flex-col !items-start" gap="3">
          <GridList
            itemArray={productsFullInfo}
            callBackFunc={(item) => (
              <Radio
                _checked={customeChecked}
                className={radioButton}
                value={item.cat_prefix}
                key={item.cat_prefix}
              >
                {item.categoryTitle}
              </Radio>
            )}
          />
        </HStack>
      </RadioGroup>
    </AccordionComponenet>
  );
}
