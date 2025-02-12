import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  } from "@/components/ui/accordion";

  import style from "./style.module.css";

const { accordionContainer } = style;

type TAccordionProps = {
    title:string;
    children:React.ReactNode
}

const AccordionComponenet = ({title,children}:TAccordionProps) => {
  return (
 <AccordionRoot collapsible defaultValue={["1"]}>
      <AccordionItem className={accordionContainer} value={"1"}>
        <AccordionItemTrigger className="text-black font-bold">
          {title}
        </AccordionItemTrigger>
        <AccordionItemContent className="text-black px-1 mt-2">
            {children}
        
        </AccordionItemContent>
      </AccordionItem>
    </AccordionRoot>  )
}

export default AccordionComponenet