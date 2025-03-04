import { TLoading } from "@/types/loadingType";
import CategoriesSkeleton from "@components/feedback/Skeleton/CategoriesSkeleton";


const skeletonObject ={
    categories: CategoriesSkeleton 
}

type TLoadingProps={
    loading:TLoading;
    error:null|string;
    children:React.ReactNode;
    type: keyof typeof skeletonObject
}

const Loading = ({loading,error,children,type}:TLoadingProps) => {

    const SkeletonComponent = skeletonObject[type]

if(loading==="pending") {
    return (
        
               <SkeletonComponent/>

        
    )
}

if(loading==="failed" ) {
    return (
    <>
    error
    </>
    )
}

  return (
    <>
     {children}
    </>
   
  )
}

export default Loading