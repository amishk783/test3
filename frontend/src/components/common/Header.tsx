import { Button } from "../ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

import { RxHamburgerMenu } from "react-icons/rx";

import profileImage from "@/assets/avatar_demo.jpeg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isUser, setUser] = useState(false);
  console.log("🚀 ~ Header ~ setUser:", setUser);
  return (
    <div className="w-full font-manrope h-min flex items-center justify-between px-4 sm:px-8 py-4 my-4">
      <Link to="/" className="w-36 h-10">
        <img src="/logo.png" className=" w-full h-full aspect-square " />
      </Link>
      <div className="md:flex gap-4 items-center  ">
        <Button variant="ghost" className="text-base hidden md:flex">
          <p className=" text-black/70">Categories</p>
          <HiOutlinePlus className="w-6 h-6" />
        </Button>
        <div className="items-center relative hidden md:flex ">
          <IoSearchOutline size={20} className=" absolute left-4" />
          <Input
            placeholder="Keyword"
            className="border-black/20 py-3 pl-10 bg-secondary text-base   rounded-full"
          />
        </div>
        {!isUser && (
          <div className=" hidden lg:flex gap-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-black text-base rounded-full "
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" className=" rounded-full text-lg px-8 ">
                Subscribe
              </Button>
            </Link>
          </div>
        )}
        {isUser && (
          <Avatar>
            <AvatarImage src={profileImage} />
          </Avatar>
        )}
        <div className="lg:hidden">
          <RxHamburgerMenu size={30} />
        </div>
      </div>
    </div>
  );
};
