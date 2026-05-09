"use client";
import HexagonIcon from "@mui/icons-material/Hexagon";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import Groups2Icon from "@mui/icons-material/Groups2";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import StoreIcon from "@mui/icons-material/Store";
import FeedIcon from "@mui/icons-material/Feed";
import CampaignIcon from "@mui/icons-material/Campaign";
import BarChartIcon from "@mui/icons-material/BarChart";
import RedeemIcon from "@mui/icons-material/Redeem";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import EventIcon from "@mui/icons-material/Event";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FlagIcon from "@mui/icons-material/Flag";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import GradientIcon from "@mui/icons-material/Gradient";
import SideMenu from "./SideMenu";
function HeadSideMenu() {
  const menuData = [
    {
      icon: <GroupIcon />,
      text: "Friends",
    },
    {
      icon: <ScheduleIcon />,
      text: "Memories",
    },
    {
      icon: <TurnedInIcon />,
      text: "Saved",
    },
    {
      icon: <Groups2Icon />,
      text: "Groups",
    },
    {
      icon: <MusicVideoIcon />,
      text: "Video",
    },
    {
      icon: <StoreIcon />,
      text: "Marketplace",
    },
    {
      icon: <FeedIcon />,
      text: "Feeds",
    },
    {
      icon: <EventIcon />,
      text: "Events",
    },
    {
      icon: <CampaignIcon />,
      text: "Ads Manager",
    },
    {
      icon: <BarChartIcon />,
      text: "Ads Center",
    },
    {
      icon: <RedeemIcon />,
      text: "Gaming",
    },
    {
      icon: <CrisisAlertIcon />,
      text: "Crisis Response",
    },
    {
      icon: <MovieCreationIcon />,
      text: "Reels",
    },
    {
      icon: <QuickreplyIcon />,
      text: "Messenger",
    },
    {
      icon: <CreditCardIcon />,
      text: "Orders & Payments",
    },
    {
      icon: <FlagIcon />,
      text: "Pages",
    },
    {
      icon: <VideogameAssetIcon />,
      text: "Play Games",
    },
    {
      icon: <GradientIcon />,
      text: "Meta AI",
    },
  ];
  return (
    <div className="page-container">
      {menuData.map((val, ind) => {
        let icon = val.icon;
        const text = val.text;

        return (
          <div key={ind}>
            <SideMenu icon={icon} text={text} onClick={() => {}} />
          </div>
        );
      })}
    </div>
  );
}
export default HeadSideMenu;
