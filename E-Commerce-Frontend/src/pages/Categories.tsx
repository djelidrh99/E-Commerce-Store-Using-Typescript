import Heading from "@/components/common/Heading/Heading"
import Categorie from "@/components/eCommerce/Categorie/Categorie"

const Categories = () => {
  return (
    <div>
    <Heading title={"Categories"}/>
    <div className="bg-white">
      <div className="container flex items-center gap-5 flex-wrap justify-between mx-auto max-lg:px-2 lg:px-10">

        <Categorie/>
        <Categorie/>
        <Categorie/>
        <Categorie/>
        <Categorie/>
        <Categorie/>
        <Categorie/>
        <Categorie/>


      </div>

    </div>
    </div>
  )
}

export default Categories