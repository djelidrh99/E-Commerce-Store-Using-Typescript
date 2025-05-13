import {  Menu, Portal } from "@chakra-ui/react"
import Logout from "@assets/svg/logout.svg?react"
import Profile from "@assets/svg/profile.svg?react";
import Orders from "@assets/svg/orders.svg?react";


type TDropMenuProps = {
  children: React.ReactNode;
  logout: () => void;
  
};



const DropMenu = ({children ,logout}:TDropMenuProps) => {
  return (
    <Menu.Root>
    <Menu.Trigger asChild>
        {children}
      
    </Menu.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content className="bg-white">
          <Menu.Item className="text-black"  value="profile"> <Profile className="w-5 h-5"/> Profile</Menu.Item>
          <Menu.Item className="text-black" value="export"><Orders className="w-5 h-5" /> Orders</Menu.Item>
          <Menu.Item
          onClick={logout}
            value="logout"
            color="fg.error"
            _hover={{ bg: "bg.error", color: "fg.error" }}
          >
            <Logout  className="w-5 h-5"/>
            Logout
          </Menu.Item>
        </Menu.Content> 
      </Menu.Positioner>
    </Portal>
  </Menu.Root>  )
}

export default DropMenu