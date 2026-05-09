import Image from "next/image";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/SideMenu";
import HeadSideMenu from "../components/HeadSideMenus"
import ProfileMenu from "../components/ProfileMenu";

export default function Home() {
  return (
    <>

        <Navbar />
    
      <ProfileMenu image="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_1280.jpg" />
      <HeadSideMenu />

    </>
  );
}
