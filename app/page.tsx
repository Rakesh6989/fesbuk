import Image from "next/image";
import Sidemenu from "../components/SideMenu";
import HeadSideMenu from "../components/HeadSideMenu";
import ProfileMenu from "../components/ProfileMenu";
import DoPost from "../components/DoPost";
export default function Home() {
  return (
    <div className="page-container">
      <div className="flex">
        <div>
          <ProfileMenu
            image="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_1280.jpg"
            name="RAKESH R"
          />
          <HeadSideMenu />
        </div>
        <div>
          <DoPost />
        </div>
      </div>
    </div>
  );
}
