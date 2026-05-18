"use client";

import HeadSideMenu from "../components/HeadSideMenu";
import ProfileMenu from "../components/ProfileMenu";
import DoPost from "../components/posts/DoPost";
import AlertComp from "../components/AlertComp";
import StoryCard from "../components/StoryCard";
import AppSlider from "@/components/ui/AppSlider";
import { storyData } from "@/data/stories";
import PostRenderer from "../components/posts/PostRenderer";
import GroupIcon from "@mui/icons-material/Group";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShortcutIcon from "@mui/icons-material/Shortcut";

export default function Home() {
  const feedData = [
    {
      id: 1,

      user: {
        userName: "Rakesh Ranjan",
        userDp:
          "https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_1280.jpg",
        isUserStory: true,
        isOnline: true,
      },

      media: {
        type: "image" as "image",
        url: "https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_1280.jpg",
        height: 1200,
        width: 1800,
      },

      postcaption: "Never Judge a Book by It's Cover.",
      posttime: "3h Ago",

      postPrivacy: <GroupIcon style={{ color: "red" }} />,

      likecount: 2,

      actions: [
        {
          id: 1,
          icon: <ThumbUpIcon style={{ color: "red" }} />,
          textname: "Like",
          onClickfn: () => console.log("Liked"),
        },

        {
          id: 2,
          icon: <CommentIcon style={{ color: "green" }} />,
          textname: "Comment",
          onClickfn: () => console.log("Commented"),
        },

        {
          id: 3,
          icon: <ShortcutIcon style={{ color: "grey" }} />,
          textname: "Share",
          onClickfn: () => console.log("Shared"),
        },
      ],
    },

    {
      id: 2,

      user: {
        userName: "Manish Chaudhari",
        userDp:
          "https://cdn.pixabay.com/photo/2020/11/25/14/37/woman-5775938_1280.jpg",
        isUserStory: false,
        isOnline: true,
      },

      media: {
        type: "image" as "image",
        url: "https://cdn.pixabay.com/photo/2018/04/21/20/50/clothing-3339497_1280.jpg",
        height: 1200,
        width: 1800,
      },

      postcaption: "Sitting on a chair behind sun is a best therapy",

      posttime: "3h Ago",

      postPrivacy: <GroupIcon style={{ color: "red" }} />,

      likecount: 10,

      actions: [
        {
          id: 1,
          icon: <ThumbUpIcon style={{ color: "red" }} />,
          textname: "Like",
          onClickfn: () => console.log("Liked"),
        },

        {
          id: 2,
          icon: <CommentIcon style={{ color: "green" }} />,
          textname: "Comment",
          onClickfn: () => console.log("Commented"),
        },

        {
          id: 3,
          icon: <ShortcutIcon style={{ color: "grey" }} />,
          textname: "Share",
          onClickfn: () => console.log("Shared"),
        },
      ],
    },
  ];

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

          <AppSlider>
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

          {feedData.map((val) => (
            <div key={val.id}>
              <PostRenderer
                user={val.user}
                media={[val.media]}
                postcaption={val.postcaption}
                posttime={val.posttime}
                postPrivacy={val.postPrivacy}
                likecount={val.likecount}
                actions={val.actions}
              />
            </div>
          ))}
        </div>

        <AlertComp />
      </div>
    </div>
  );
}
