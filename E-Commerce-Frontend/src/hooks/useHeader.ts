import { useEffect, useRef, useState } from "react";

const useHeader = () => {
    const [position,setPosition]=useState({
        width:70,
        left:0,
        opacity:1
      })
      useEffect(()=>{
        if(sessionStorage.getItem('left')!==null && sessionStorage.getItem('width')!==null) {
          const left = JSON.parse(sessionStorage.getItem('left') || '0');
          const width = JSON.parse(sessionStorage.getItem('width') || '0');
          setPosition({
            left:Number(left),
            width:Number(width),
            opacity: 1,
          })
    
        }
    
      },[])
    
      ;
      const handleCursorPosistion = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const element = event.currentTarget;
        const parent = element.closest("ul")
        const parentLeft = parent ? parent.getBoundingClientRect().left : 0;
        const { width, left } = element.getBoundingClientRect();
        sessionStorage.setItem("left",JSON.stringify(left-parentLeft))
        sessionStorage.setItem("width",JSON.stringify(width))
    
        setPosition({
          left:left-parentLeft,
          width,
          opacity: 1,
        });
      }
  
    return {position,handleCursorPosistion}
}

export default useHeader