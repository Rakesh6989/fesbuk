"use client";
import React from "react";
import ProfileMenu from "../components/ProfileMenu";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
function DoPost() {
  interface CreatePostPayload {
    captions?: string;
    image?: File;
    video?: File;
    reel?: File;
  }
  return (
    <div className="bg-[#FFFEFE] w-full flex justify-between items-center shadow-xl px-5 rounded-xl">
      <ProfileMenu image="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_1280.jpg" />

      <input
        type="text"
        placeholder="What's on your mind, Rakesh?"
        className="bg-[#f1f3f5] rounded-full py-3    xs:w-60 sm:w-80 md:w-90 lg:w-100    w-110  max-w-3xl   px-5 outline-none text-lg"
      />

      <div className="flex gap-2.5 pl-3">
        <VideoCameraBackIcon sx={{ color: "red", fontSize: "30px" }} />
        <ImageIcon sx={{ color: "green", fontSize: "30px" }} />
        <VideocamIcon sx={{ color: "orange", fontSize: "30px" }} />
      </div>
    </div>
  );
}

export default DoPost;
