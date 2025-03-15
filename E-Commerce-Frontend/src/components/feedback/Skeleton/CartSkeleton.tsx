import ContentLoader from "react-content-loader"


const CartSkeleton = () => {
    const SkeletonList = Array(2).fill("").map((_,index)=>{
        return (
            <ContentLoader 
            speed={2}
            width={400}
            height={90}
            viewBox="0 0 400 90"
            backgroundColor="#e9e2e2"
            foregroundColor="#f2f2f2"
            key={index}
          >
            <rect x="62" y="51" rx="5" ry="5" width="65" height="10" /> 
            <rect x="4" y="33" rx="7" ry="7" width="52" height="48" /> 
            <rect x="135" y="51" rx="5" ry="5" width="65" height="10" /> 
            <rect x="207" y="51" rx="5" ry="5" width="65" height="10" /> 
            <rect x="287" y="51" rx="5" ry="5" width="65" height="10" />
          </ContentLoader>
    
        )
        })
  return (
    <div className="container flex flex-wrap md:flex-nowrap  gap-5  py-10 mx-auto max-lg:px-2 lg:px-10">
         <div className="flex flex-grow  gap-1 flex-col p-5 border border-black rounded">
      {SkeletonList}
      </div>
    <div className="flex-grow p-5 border flex justify-center border-black rounded">
    <ContentLoader 
    speed={2}
    width={150}
    height={150}
    viewBox="0 0 150 150"
    backgroundColor="#e9e2e2"
    foregroundColor="#f2f2f2"
    
  >
    <rect x="18" y="49" rx="5" ry="5" width="57" height="10" /> 
    <rect x="92" y="48" rx="5" ry="5" width="57" height="10" /> 
    <rect x="19" y="75" rx="5" ry="5" width="57" height="10" /> 
    <rect x="94" y="74" rx="5" ry="5" width="57" height="10" /> 
    <rect x="17" y="105" rx="5" ry="5" width="57" height="10" /> 
    <rect x="94" y="105" rx="5" ry="5" width="57" height="10" /> 
    <rect x="45" y="133" rx="5" ry="5" width="89" height="10" />
  </ContentLoader>
    </div>
      
     
      </div>
  )
}

export default CartSkeleton