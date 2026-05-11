import React from "react";
import Image from "next/image";

interface SideMenuProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  active?: boolean;
}

function SideMenu({ icon, text, onClick, active }: SideMenuProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-3 py-2 mb-2 cursor-pointer rounded-xl flex items-center gap-5 hover:bg-gray-200 transition ${
        active ? "bg-gray-300" : ""
      }`}
    >
      <div>{icon}</div>
      <span className="text-[16px] font-medium">{text}</span>
    </button>
  );
}

export default SideMenu;
