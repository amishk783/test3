import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoginDisplayImage from "@/assets/login_display.png";
import GoogleIcon from "@/assets/google_icon.png";
import OutlookIcon from "@/assets/outlook_icon.png";
const Login = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-1/2 h-full py-8 px-12 hidden md:block">
        <div className="  md:w-full xl:w-[692px] h-[884px] rounded-xl overflow-hidden">
          <img
            width={692}
            height={884}
            className="w-full h-full"
            src={LoginDisplayImage}
          ></img>
        </div>
      </div>
      <div className="md:w-1/2 flex gap-8 lg:gap-16 flex-col h-full p-6 md:p-12 ">
        <div className="flex items-end w-full justify-start">
          <h3 className="text-xl font-lobster">Transitly</h3>
        </div>
        <div className="w-full h-full flex justify-center  gap-8 flex-col">
          <div className="xl:w-2/3 flex gap-4 flex-col">
            <h4 className="text-5xl text-bold">Welcome Back</h4>
            <p className=" text-xl">
              Access your personalized transit updates.
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
              <div className="bg-gradient-to-r from-[#66666600] to-[#000000] w-32 h-[1px]"></div>
              <p>Or Continue With</p>
              <div className="bg-gradient-to-r from-[#000000] to-[#66666600] w-32 h-[1px]"></div>
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

export default Login;
