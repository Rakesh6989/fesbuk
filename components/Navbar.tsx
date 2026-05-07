"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Image from "next/image";
function Navbar() {
  type NavFormData = {
    fesbuksearch: string;
  };

  const [data, setData] = useState<NavFormData>({
    fesbuksearch: "",
  });
  const fesbukhandlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.fesbuksearch.trim() === "") {
      alert("search something else");
    } else {
      alert("form filled");
      console.log(data);
      setData({
        fesbuksearch: "",
      });
    }
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
    <div className="bg-[#FFFEFE] shadow-lg py-2">
      <nav className="page-container flex items-center justify-between">
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
                className="py-2 bg-[#f1f3f5] rounded-2xl text-left px-10 outline-none "
                onChange={fesbukhandlechange}
                value={data.fesbuksearch}
                name="fesbuksearch"
              />
              <SearchIcon className="absolute left-2.5 top-2.5 text-[#64686D] " />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-20">
          <HomeFilledIcon style={iconstyles} />
          <MusicVideoIcon style={iconstyles} />
          <GroupsIcon style={iconstyles} />
          <VideogameAssetIcon style={iconstyles} />
        </div>

        <div className="flex justify-between gap-3.5">
          <div className="h-12 w-12 rounded-[50%] bg-[#E3E4E9] flex justify-center items-center">
            <WidgetsIcon style={iconstyles.righticon} />
          </div>
          <div className="h-12 w-12 rounded-[50%] bg-[#E3E4E9] flex justify-center items-center">
            <ChatIcon style={iconstyles.righticon} />
          </div>

          <div className="h-12 w-12 rounded-[50%] bg-[#E3E4E9] flex justify-center items-center">
            <NotificationsActiveIcon style={iconstyles.righticon} />
          </div>
          <Image
            src="https://cdn.pixabay.com/photo/2021/07/03/20/06/woman-6384768_1280.jpg"
            height={50}
            width={50}
            alt="user"
            className="rounded-[50%] object-contain"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
