import empty from "@assets/lottier/animations/empty.json";
import error from "@assets/lottier/animations/error.json";
import loading from "@assets/lottier/animations/loading.json";

import Lottie from "lottie-react"


const lottieAnimation = {

    empty: empty,
    error: error,
    loading: loading
}

type LottieHandlerProps = {
type: keyof typeof lottieAnimation;
message?: string;

}



const LottieHandler = ({message,type}:LottieHandlerProps) => {
  return (
    <div className="flex flex-col items-center h-full justify-center pb-4 ">
<Lottie style={{width:"30%"}} animationData={lottieAnimation[type]}>

</Lottie>
<h3 className={type==="loading"?"font-bold black capitalize text-white text-base md:text-xl mt-5":
   "font-bold black capitalize text-red-600 text-base md:text-xl mt-5"}>{message}</h3>

    </div>
  )
}

export default LottieHandler