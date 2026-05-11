"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  type NavFormData = {
    fesbuksearch: string;
  };

  const [data, setData] = useState<NavFormData>({
    fesbuksearch: "",
  });

  const fesbukhandlechange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlesubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (data.fesbuksearch.trim() === "") {
      alert("search something");
      return;
    }

    console.log(data);

    setData({
      fesbuksearch: "",
    });
  };

  const iconstyles = {
    fontSize: "35px",
    color: "#6E7174",

    righticon: {
      fontSize: "25px",
      color: "#090808",
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#FFFEFE] shadow-lg z-50">
      <nav className="page-container h-full flex items-center justify-between">
       
        <div className="flex items-center">
          <FacebookIcon
            sx={{
              color: "#0867FE",
              fontSize: "60px",
            }}
          />

          <form onSubmit={handlesubmit}>
            <div className="relative ml-1">
              <input
                type="text"
                placeholder="Search fesbuk"
                className="h-11 w-[290px] bg-[#f1f3f5] rounded-3xl pl-10 pr-4 outline-none"
                onChange={fesbukhandlechange}
                value={data.fesbuksearch}
                name="fesbuksearch"
              />

              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64686D]" />
            </div>
          </form>
        </div>

      
        <div className="flex items-center gap-20">
          <HomeFilledIcon style={iconstyles} />

          <MusicVideoIcon style={iconstyles} />

          <GroupsIcon style={iconstyles} />

          <VideogameAssetIcon style={iconstyles} />
        </div>

      
        <div className="flex items-center gap-3.5">
          <div className="h-12 w-12 rounded-full bg-[#E3E4E9] flex justify-center items-center cursor-pointer">
            <WidgetsIcon style={iconstyles.righticon} />
          </div>

          <div className="h-12 w-12 rounded-full bg-[#E3E4E9] flex justify-center items-center cursor-pointer">
            <ChatIcon style={iconstyles.righticon} />
          </div>

          <div className="h-12 w-12 rounded-full bg-[#E3E4E9] flex justify-center items-center cursor-pointer">
            <NotificationsActiveIcon style={iconstyles.righticon} />
          </div>

          <Image
            src="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_1280.jpg"
            height={50}
            width={50}
            alt="user"
            priority
            className="rounded-full object-cover cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;