
type TGridListProps<T>= {
    itemArray : T[];
    callBackFunc: (item:T)=> React.ReactNode
}

const GridList = <T,>({itemArray,callBackFunc}:TGridListProps<T>) => {
  return (
  <>
   {itemArray.map((item)=>{
            return(
                callBackFunc(item)
            )
          })}

  </>
 )
}

export default GridList