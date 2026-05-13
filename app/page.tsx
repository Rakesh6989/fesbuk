import HeadSideMenu from "../components/HeadSideMenu";
import ProfileMenu from "../components/ProfileMenu";
import DoPost from "../components/DoPost";
import StoryCard from "../components/StoryCard";
import AppSlider from "@/components/ui/AppSlider";
import { storyData } from "@/data/stories";
export default function Home() {
  console.log(storyData);
  return (
    <div className="page-container">
      <div className="flex gap-5 justify-start">
        <div>
          <ProfileMenu
            image="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_1280.jpg"
            name="RAKESH R"
          />
          <HeadSideMenu />
        </div>
        <div>
          <DoPost />

          <AppSlider className="w-full max-w-[40rem]">
            {storyData.map((val) => (
              <StoryCard
                key={val.id}
                dp={val.dp}
                thumb={val.thumb}
                isOnline={val.isOnline}
                UserName={val.UserName}
              />
            ))}
          </AppSlider>
        </div>
      </div>
    </div>
  );
}
