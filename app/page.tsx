"use client";
import HeadSideMenu from "../components/HeadSideMenu";
import ProfileMenu from "../components/ProfileMenu";
import DoPost from "../components/posts/DoPost";
import AlertComp from "../components/AlertComp";
import StoryCard from "../components/StoryCard";
import AppSlider from "@/components/ui/AppSlider";
import { storyData } from "@/data/stories";
import PostRenderer from "../components/posts/PostRenderer";
export default function Home() {
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

        <div className="flex flex-col overflow-y-auto w-full max-w-160">
          <DoPost />
          <AppSlider className="">
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
          <PostRenderer />
        </div>

        <AlertComp />
      </div>
    </div>
  );
}
