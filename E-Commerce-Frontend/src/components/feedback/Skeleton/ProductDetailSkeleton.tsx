import ContentLoader from "react-content-loader"

const ProductDetailSkeleton = () => {
  return (
    <div className="container flex  gap-5 flex-wrap   justify-center py-10 mx-auto max-lg:px-2 lg:px-10">
        
      

  <div>
     <ContentLoader 
    speed={2}
    width={320}
    height={400}
    viewBox="0 0 320 400"
    backgroundColor="#e9e2e2"
    foregroundColor="#f2f2f2"
    
  >
    <rect x="1" y="-9" rx="2" ry="2" width="292" height="292" /> 
    <rect x="50" y="311" rx="2" ry="2" width="41" height="41" /> 
    <rect x="126" y="310" rx="2" ry="2" width="41" height="41" /> 
    <rect x="197" y="310" rx="2" ry="2" width="41" height="41" />
  </ContentLoader>
    

  </div>

  <div>
      <ContentLoader 
    speed={2}
    width={205}
    height={300}
    viewBox="0 0 205 300"
    backgroundColor="#e9e2e2"
    foregroundColor="#f2f2f2"

  >
    <rect x="3" y="14" rx="6" ry="6" width="146" height="11" /> 
    <rect x="6" y="56" rx="6" ry="6" width="201" height="4" /> 
    <rect x="6" y="71" rx="6" ry="6" width="146" height="3" /> 
    <rect x="5" y="63" rx="6" ry="6" width="201" height="4" /> 
    <rect x="6" y="49" rx="6" ry="6" width="201" height="4" /> 
    <rect x="10" y="100" rx="6" ry="6" width="55" height="10" /> 
    <rect x="80" y="100" rx="6" ry="6" width="55" height="10" /> 
    <rect x="10" y="138" rx="6" ry="6" width="116" height="11" /> 
    <circle cx="25" cy="202" r="14" /> 
    <circle cx="67" cy="202" r="14" /> 
    <rect x="7" y="233" rx="6" ry="6" width="80" height="21" /> 
    <circle cx="366" cy="460" r="14" /> 
    <rect x="92" y="232" rx="6" ry="6" width="80" height="21" /> 
    <circle cx="24" cy="284" r="14" /> 
    <circle cx="66" cy="284" r="14" />
  </ContentLoader>
  </div>
        
        </div>
  )
}

export default ProductDetailSkeleton