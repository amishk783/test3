import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SingupDisplayImage from "@/assets/signup-display.png";
import GoogleIcon from "@/assets/google_icon.png";
import OutlookIcon from "@/assets/outlook_icon.png";
const Signup = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-1/2 h-full py-8 px-12 hidden md:block">
        <div className="  md:w-full xl:w-full h-[884px] rounded-xl overflow-hidden">
          <img
            className="md:h-full xl:w-5/6 2xl:w-full  "
            src={SingupDisplayImage}
          ></img>
        </div>
      </div>
      <div className="md:w-1/2 flex gap-8 lg:gap-16 flex-col h-full justify-center p-12 ">
        <div className="flex items-end w-full justify-start ">
          <h3 className="text-xl font-lobster">Transitly</h3>
        </div>
        <div className="w-full h-full flex justify-center  gap-8 flex-col">
          <div className="xl:w-2/3 flex gap-4 flex-col">
            <h4 className="text-5xl text-bold">Stay Ahead of Transit.</h4>
            <p className=" text-xl">
              Get real-time updates, save your favorite articles, and access
              premium content.
            </p>
          </div>
          <div className="flex flex-col gap-4 xl:w-2/3 items-center">
            <div className="flex flex-col w-full items-start gap-2">
              <p>Name*</p>
              <Input
                placeholder="John Kent"
                className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
              />
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <p>Email*</p>
              <Input
                placeholder="johnkent123@yahoo.com"
                className="border-black/20 py-6  px-6 bg-secondary rounded-full"
              />
            </div>
            <div className="flex flex-col w-full  items-start gap-2">
              <p>Password*</p>
              <Input
                type="password"
                placeholder="********"
                className="border-black/20 py-6  px-6 bg-secondary rounded-full"
              />
            </div>
            <Button
              variant="primary"
              className="w-full rounded-full py-6 text-lg font-normal "
            >
              Create My Free Account
            </Button>
            <div className="flex items-center gap-4 py-2">
              <div className="bg-gradient-to-r from-[#66666600] to-[#000000] w-20 lg:w-32 h-[1px]"></div>
              <p className=" whitespace-nowrap">Or Continue With</p>
              <div className="bg-gradient-to-r from-[#000000] to-[#66666600] w-20 lg:w-32 h-[1px]"></div>
            </div>
            <div className="w-full h-full flex flex-col gap-2 ">
              <Button className="w-full rounded-full py-6 border font-normal border-black/30 text-lg bg-transparent text-primary">
                <img className=" " src={GoogleIcon} />
                <p className="w-full">Sign Up with Google</p>
              </Button>
              <Button className="w-full rounded-full py-6 border font-normal border-black/30 text-lg bg-transparent text-primary">
                <img src={OutlookIcon} />{" "}
                <p className=" w-full">Sign Up with Outlook</p>
              </Button>
            </div>
            <p className="flex gap-1">
              Already have an account?<span className="underline">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
