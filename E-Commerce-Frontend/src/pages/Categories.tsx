import Heading from "@/components/common/Heading/Heading"
import Categorie from "@/components/eCommerce/Categorie/Categorie"
import Loading from "@/components/feedback/Cursor/Loading/Loading"
import { categoriesCleanUp } from "@/store/CategoriesSlice/CategoriesSlice"
import { getCategoriesThunk } from "@/store/CategoriesSlice/thunk/getCategoriesThunk"
import { useAppDispatch, useAppSelector } from "@/store/Hooks/hooks"
import { useEffect } from "react"

const Categories = () => {

  const dispatch =useAppDispatch()
  const {caetgoriesList,loading}=useAppSelector(state=>state.categories)

  useEffect(()=>{
   const promise = dispatch(getCategoriesThunk())
   
   return (()=>{
      promise.abort()
      dispatch(categoriesCleanUp())
   })
 
  },[dispatch])



  return (
    <div>
    <Heading title={"Categories"}/>
    <div className="bg-white ">
      <Loading loading={loading} error={null}  type={"categories"}>
      <div className="container flex  gap-5 flex-wrap   justify-start py-10 mx-auto max-lg:px-2 lg:px-10">
        
        {caetgoriesList.map((item)=>{
          return(
            <>
             <Categorie key={item.id} title={item.title} img={item.img}/>
            </>

          )
        })}

       
        


      </div>
        
      </Loading>
     

    </div>
    </div>
  )
}

export default Categories