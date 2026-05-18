"use client";

import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
interface ActionButtonsProps {
  icon: React.ReactNode;
  textname: string;
  onClickfn: () => void;
}

interface PostRendererProps {
  user: {
    userName: string;
    userDp?: string;
    isUserStory: boolean;
    isOnline: boolean;
  };

  postcaption?: string;

  media?: {
    type: "image" | "video";
    url: string;
    height: number;
    width: number;
  }[];

  posttime: string;

  postPrivacy: React.ReactElement;

  likecount: number;

  actions?: {
    id: number;
    icon: React.ReactNode;
    textname: string;
    onClickfn: () => void;
  }[];
}

export const ActionButtons = ({
  icon,
  textname,
  onClickfn,
}: ActionButtonsProps) => {
  return (
    <div className="cursor-pointer">
      <div className="flex gap-1.5" onClick={onClickfn}>
        {icon}

        <p className="text-white">{textname}</p>
      </div>
    </div>
  );
};

function PostRenderer({
  user,
  postPrivacy,
  postcaption,
  media,
  posttime,
  likecount,
  actions,
}: PostRendererProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black mb-3">
      <div className="flex justify-between gap-3.5 p-4 items-start w-full">
        <div>
          <div className="flex justify-start gap-2 items-start relative">
            <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full border-4 border-[#0867FE] bg-gray-300 z-20">
              {user?.userDp ? (
                <Image
                  src={user.userDp}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              ) : (
                <PersonIcon
                  style={{
                    fontSize: "26px",
                    color: "#fff",
                  }}
                />
              )}
            </div>
            {user?.isOnline && (
              <div className="absolute bottom-2 left-8 z-50 w-2 h-2  bg-green-600 border-2 border-white rounded-full"></div>
            )}
            <div className="text-xs font-semibold">
              <p className="text-white">{user.userName}</p>

              <div className="flex gap-2.5">
                <p className="text-white">{posttime}</p>

                <p>
                  {postPrivacy ? (
                    postPrivacy
                  ) : (
                    <PublicIcon
                      sx={{
                        fontSize: "15px",
                        color: "grey",
                      }}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>

          <p className="text-white py-1">{postcaption}</p>
        </div>

        <div className="text-white flex gap-1">
          <MoreHorizIcon />

          <CloseIcon />
        </div>
      </div>

      {media?.[0]?.type === "image" ? (
        <Image
          src={media[0].url}
          width={media[0].width}
          height={media[0].height}
          className="w-full h-auto"
          alt="post"
        />
      ) : (
        <video src={media?.[0]?.url} controls className="w-full h-auto" />
      )}

      <div className="flex justify-between p-3">
        <p className="text-white text-lg">{likecount} Likes</p>

        <div className="flex gap-3">
          <p className="text-white">45 Comments</p>

          <p className="text-white">5 Shares</p>
        </div>
      </div>

      <div className="flex justify-evenly p-3">
        {actions?.map((val) => (
          <ActionButtons
            key={val.id}
            icon={val.icon}
            textname={val.textname}
            onClickfn={val.onClickfn}
          />
        ))}
      </div>
    </div>
  );
}

export default PostRenderer;
