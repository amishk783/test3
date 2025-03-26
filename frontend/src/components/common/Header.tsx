import { Button } from "../ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";

import { RxHamburgerMenu } from "react-icons/rx";

import profileImage from "@/assets/avatar_demo.jpeg";
import { Link } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AvatarPopover } from "../AvatarPopover";

export const Header = () => {
  const isAuth = useIsAuthenticated();

  const { instance, inProgress } = useMsal();
  const [isLoading, setIsLoading] = useState(false);
 

  const login = async () => {
    try {
     
      const response = await instance.loginRedirect({
        scopes: ["openid", "offline_access"],
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (inProgress === "handleRedirect") {
      setIsLoading(true);
      toast.success("You are logged in! 🎉");
    }
  }, [inProgress]);

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
        {!isAuth && (
          <div className=" hidden lg:flex gap-4">
            <Button
              onClick={login}
              variant="outline"
              className="border-black text-base rounded-full "
            >
              Login
            </Button>
          </div>
        )}

        <div className="flex  gap-2 items-center">
          <Link to="/signup">
            <Button
              variant="primary"
              className=" hidden md:block  rounded-full px-8 "
            >
              Subscribe
            </Button>
          </Link>
          {(isLoading || isAuth) && <AvatarPopover src={profileImage} />}
          <div className="sm:hidden">
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
