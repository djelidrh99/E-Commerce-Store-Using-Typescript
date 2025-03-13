import ContentLoader from "react-content-loader"


const ProductsSkeleton = () => {
    const SkeletonList = Array(4).fill("").map((_,index)=>{
        return (
            <ContentLoader 
            key={index}
            speed={2}
            width={200}
            height={400}
            viewBox="0 0 200 400"
            backgroundColor="#e9e2e2"
            foregroundColor="#f2f2f2"
          >
            <rect x="2" y="71" rx="7" ry="7" width="190" height="190" />
          </ContentLoader>
    
        )
        })
      return (
        <div className="container flex flex-wrap md:flex-nowrap  gap-5  py-10 mx-auto max-lg:px-2 lg:px-10">
             <ContentLoader 
    speed={2}
    width={200}
    height={400}
    viewBox="0 0 200 400"
      backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
  >
    <rect x="11" y="24" rx="3" ry="3" width="73" height="9" /> 
    <rect x="9" y="51" rx="7" ry="7" width="173" height="276" /> 
    <rect x="20" y="74" rx="0" ry="0" width="84" height="13" />
            </ContentLoader>
            <div className="flex  gap-5 flex-wrap">
            {SkeletonList}
            </div>
            </div>
      )
}

export default ProductsSkeleton