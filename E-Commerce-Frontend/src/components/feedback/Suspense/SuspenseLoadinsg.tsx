import LottieHandler from "@components/feedback/LottierHandler/LottierHandler"

const SuspenseLoadinsg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[var(--bg-primary)]  z-50">
        <LottieHandler type="loading" message="Loading..." />
    </div>
  )
}

export default SuspenseLoadinsg