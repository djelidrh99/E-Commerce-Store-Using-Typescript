import ContentLoader from "react-content-loader"


const CategoriesSkeleton = () => {
  const SkeletonList = Array(4).fill("").map((_,index)=>{
    return (
      <ContentLoader 
      speed={2}
      width={165} 
      height={170}
      viewBox="0 0 165 170"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      key={index}
    >
      <rect x="15" y="141" rx="3" ry="3" width="88" height="6" /> 
      <rect x="32" y="158" rx="3" ry="3" width="52" height="6" /> 
      <circle cx="57" cy="77" r="52" />
    </ContentLoader>

    )
    })
  return (
    <div className="container flex  gap-5 flex-wrap   justify-center py-10 mx-auto max-lg:px-2 lg:px-10">{SkeletonList}</div>
  )
}

export default CategoriesSkeleton