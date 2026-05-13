"use client";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
interface StoryCardProps {
  createForSelfMode?: boolean;
  selfDP?: string;
  selfStoryCreateFN?: () => void;
  thumb?: string;
  dp?: string;
  storyWatchFN?: () => void;
  isOnline?: boolean;
  UserName: string;
}
function StoryCard({
  thumb,
  dp,
  storyWatchFN,
  isOnline,
  UserName,
  createForSelfMode,
  selfStoryCreateFN,
  selfDP,
}: StoryCardProps) {
  return (
    <div
      onClick={createForSelfMode ? selfStoryCreateFN : storyWatchFN}
      className="relative
      cursor-pointer
w-30
sm:w-36
aspect-2/3
overflow-hidden
rounded-2xl
bg-white
shadow-lg

"

    >
      {!createForSelfMode ? (
        <>
          <div className="relative w-full h-full ">
            {thumb && (
              <Image src={thumb} alt="Story" fill className="object-cover" />
            )}
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-sm font-semibold text-white line-clamp-1">
                {UserName}
              </p>
            </div>
          </div>
          <div className="absolute top-3 left-3 w-10 h-10">
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full border-4 border-[#0867FE] bg-gray-300">
              {dp ? (
                <Image src={dp} alt="Profile" fill className="object-cover" />
              ) : (
                <PersonIcon
                  style={{
                    fontSize: "26px",
                    color: "#fff",
                  }}
                />
              )}
            </div>
            {isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border-2 border-white rounded-full"></div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex h-full flex-col items-center">
            {selfDP ? (
              <div className="relative w-full flex-1">
                <Image src={selfDP} alt="Self" fill className="object-cover" />
              </div>
            ) : (
              <div className="flex-1">
                <PersonIcon
                  style={{
                    fontSize: "120px",
                    color: "gray",
                  }}
                />
              </div>
            )}
            <div className="relative flex h-20 w-full items-end justify-center bg-white pb-4 border-t">
              <div className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#1877F2]">
                <AddCircleIcon
                  style={{
                    fontSize: "34px",
                    color: "white",
                  }}
                />
              </div>
              <p className="text-base font-semibold text-black">Create story</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StoryCard;
