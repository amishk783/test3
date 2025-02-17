import { Button } from "../ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import Logo from "@/assets/logo.png";


import profileImage from "@/assets/avatar_demo.jpeg";

const Header = () => {
  const [isUser, setUser] = useState(false);
  return (
    <div className="w-full font-manrope h-min flex items-center justify-between px-20 py-4 my-4">
      <div className="w-36 h-10">
        <img src={Logo} className=" w-full h-full aspect-square " />
      </div>
      <div className="flex gap-4 items-center ">
        <Button variant="ghost" className="text-base">
          <p className=" text-black/70">Categories</p>
          <HiOutlinePlus className="w-6 h-6" />
        </Button>
        <div className="flex items-center relative">
          <IoSearchOutline size={20} className=" absolute left-4" />
          <Input
            placeholder="Keyword"
            className="border-black/20 py-3 pl-10 bg-secondary text-base   rounded-full"
          />
        </div>
        {!isUser && (
          <>
            <Button
              variant="outline"
              className="border-black text-base rounded-full"
            >
              Login
            </Button>
            <Button variant="primary" className=" rounded-full text-lg px-8 ">
              Subscribe
            </Button>
          </>
        )}
        {isUser && (
          <Avatar>
            <AvatarImage src={profileImage} />
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default Header;
