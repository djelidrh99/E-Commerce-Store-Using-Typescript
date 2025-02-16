import lightting from '@assets/img/lighting.png'
import Cart from '@assets/svg/cartAdd.svg?react'
import Like from '@assets/svg/like.svg?react'
import style from './style.module.css'
import { TProduct } from '@/types/productType'

const {productContainer,imgContainer,informationBox,addToCartBox,likeBox,soldBox} =style


const Product = ({id,img,title,price}:TProduct) => {
  return (
    <div className={productContainer}>
        <div className={imgContainer}>
            <img className='h-full w-full object-cover' src={img} alt={title} />
            </div>
        <div className={informationBox}>
            <div>
                <h5 className='font-semibold text-white text-sm lg:text-base capitalize'>{title}</h5>
                <h6 className='text-white capitalize text-xs lg:text-base'>{price}$ <span className='line-through hidden text-[var(--text-tertiary)] text-xs md:text-base ml-1 sm:ml-2'>190%</span></h6>
            </div>
            <div className={addToCartBox}>
                <Cart className='w-5 h-5 sm:!w-6 sm:!h-6 transition-all hover:scale-105' />
                
            </div>
        </div>
        <div className={likeBox}>
            <Like className='w-5 h-5 sm:w-6 sm:h-6'/>

        </div>
        <div className={soldBox}>
          <span>20%</span>

        </div>
    </div>
  )
}

export default Product