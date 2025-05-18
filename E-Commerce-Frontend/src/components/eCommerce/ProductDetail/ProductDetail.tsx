import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./style.module.css";
import { Button } from "@chakra-ui/react";
import Like from "@assets/svg/heart.svg?react";
import Share from "@assets/svg/share.svg?react";

const { productDetailsContainer } = styles;

type TProductDetailProps = {
  imgGroup: string[];
};

const ProductDetail = ({ imgGroup }: TProductDetailProps) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a className="">
          <img className=" " src={imgGroup[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={productDetailsContainer}>
      <div className="slider-container w-80">
        <Slider className="" {...settings}>
          {imgGroup.map((img, index) => (
            <div key={index} className="bg-[var(--bg-tertiary)] rounded">
              <img src={img} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col  text-black">
        <h3 className="flex-1 text-[var(--text-secondary)]">Title</h3>
        <div className="flex-1">
          <h5>
            130$ <span>150$</span>{" "}
          </h5>
          <h5>
            Product Code : 546545 <span>In stock</span>
          </h5>
          <h5>
            Review <span>140 reviews</span> | <span>545 sold</span>
          </h5>
         
        </div>
        <div flex-1>
           <div className="flex items-center gap-1 bg-white rounded-full px-1.5 py-2">
            <button className="text-black/60 w-6 h-6 cursor-pointer   md:w-9 md:h-9  flex justify-center items-center  bg-[var(--bg-tertiary)] rounded-full  font-bold text-lg md:text-xl">
              -
            </button>
            <span className="flex-grow text-center ">1</span>
            <button className="text-black/60 w-6 h-6 md:w-9 md:h-9 cursor-pointer flex justify-center items-center  bg-[var(--bg-tertiary)] rounded-full  font-bold text-lg md:text-xl">
              +
            </button>
          </div>

          <div>
            <Button
              rounded="3xl"
              className="bg-[var(--bg-secondary)] py-2 px-5 text-white"
            >
              Buy Now
            </Button>
            <Button
              rounded="3xl"
              className="bg-[var(--bg-primary)] py-2 px-5 text-white"
            >
              Add To Cart
            </Button>
            <Button
              rounded="3xl"
              className="border border-gray-400 p-2 text-white"
            >
              <Like />
            </Button>
            <Button
              rounded="3xl"
              className="border border-gray-400 p-2 text-white"
            >
              <Share/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
