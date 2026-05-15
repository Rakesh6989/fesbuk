"use client";
import Image from "next/image";
interface PostRendererProps {
  user: {
    userName: string;
    userDp?: string;
    isUserStory: boolean;
  };
  postcaption: string;
  media?: {
    type: "image" | "video";
    url: string;
    height: number;
    width: number;
  }[];
  posttime: string;
  postPrivacy: string;
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

    h-[250px]
    sm:h-[350px]
    md:h-[450px]
    lg:h-[550px]
  "
      >
        <Image
          src="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_1280.jpg"
          fill
          alt="post"
          className="object-cover"
        />
      </div>
    </>
  );
}

export default PostRenderer;
