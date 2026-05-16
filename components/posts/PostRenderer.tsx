"use client";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
interface PostRendererProps {
  user: {
    userName: string;
    userDp?: string;
    isUserStory: boolean;
    isOnline: boolean;
  };
  postcaption: string;
  media?: {
    type: "image" | "video";
    url: string;
    height: number;
    width: number;
  }[];
  posttime: string;
  postPrivacy: React.ReactElement;
  actionLabel: string;
  actionFN: () => void;
  interactionLike: () => void;
  interactionComment: () => void;
  interactionShare: () => void;
  dismissFN: () => void;
}
function PostRenderer({
  user,
  postPrivacy,
  postcaption,
  media,
  posttime,
}: PostRendererProps) {
  return (
    <>
      <div
        className="
    relative
    w-full
    overflow-hidden
    rounded-2xl
    bg-black
  
  "
      >
        <div
          className="flex justify-between gap-3.5 p-4 items-start 
        
     w-full
        
        "
        >
          <div>
            <div className=" flex justify-start gap-2 items-start">
              <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-full border-4 border-[#0867FE] bg-gray-300">
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
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border-2 border-white rounded-full"></div>
              )}

              <div className="text-xs font-semibold">
                <p className="text-white">
                  {user?.userName ? user.userName : "Rakesh is in Siwan"}
                </p>
                <div className="flex gap-2.5">
                  <p className="text-white">
                    {posttime ? posttime : "a time ago"}
                  </p>
                  <p>
                    {postPrivacy ? (
                      postPrivacy
                    ) : (
                      <PublicIcon sx={{ fontSize: "15px", color: "grey" }} />
                    )}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-white py-1">
              {postcaption
                ? postcaption
                : "Hamko Mita ske ye Zamane me Dm nhin Hmse zamana hain zamane se ham nhin"}
            </p>
          </div>

          <div className="text-white flex gap-1">
            <MoreHorizIcon />
            <CloseIcon />
          </div>
        </div>
        <Image
          src="https://cdn.pixabay.com/photo/2021/08/08/08/01/friends-6530180_1280.jpg"
          width={1000}
          height={853}
          className="w-full h-auto"
          alt="post"
        />{" "}
      </div>
    </>
  );
}

export default PostRenderer;
