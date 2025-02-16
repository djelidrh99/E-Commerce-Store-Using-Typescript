import style from './style.module.css'
import { TCategories } from "@/types/categoriesType";
import Arrow from '@assets/svg/arrow.svg?react'

const {container,imgContainer,box,arrowContainer}=style

const Categorie = ({img,prefix,title}:TCategories) => {
  return (
    <div className={container}>
      <div className={imgContainer}>
        <img
          className="w-full h-full rounded-full object-cover"
          src={img}
          alt={title}
        />
      </div>
      <div className={box}>
        <div>
        <h5 className="font-semibold text-sm text-black lg:text-base capitalize">{title}</h5>
        <h6 title='discover more Products' className="text-[var(--text-secondary)] capitalize text-xs lg:text-base whitespace-nowrap overflow-hidden text-ellipsis max-sm:w-20">discover more Products</h6>
        </div>
        <div className={arrowContainer}>
          <Arrow className='w-6 h-6'/>

        </div>
        
      </div>
    </div>
  );
};

export default Categorie;
