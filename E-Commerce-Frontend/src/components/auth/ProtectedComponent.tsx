import { useAppSelector } from "@/store/Hooks/hooks";
import {Navigate} from "react-router-dom";


type ProtectedComponentProps = {
    children: React.ReactNode   }

const ProtectedComponent = ({children}:ProtectedComponentProps) => {
const {accessToken} = useAppSelector((state)=>state.auth)


if(!accessToken){
    return <Navigate to={"/login?message=Login_is_required"}/>


}


    return (
        <>
               {children}

        </>
    )
}

export default ProtectedComponent