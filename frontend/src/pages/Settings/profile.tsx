import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AvatarDemo from "@/assets/profile.png";
import { Input } from "@/components/ui/input";
export const SettingsProfile = () => {
  return (
    <div className=" flex flex-col gap-16 w-full h-full">
      <div className="w-full   ">
        <p className=" font-bold pb-8">Profile Photo</p>
        <div className="flex flex-col lg:flex-row md:gap-10  gap-4">
          <div className="flex items-center gap-5">
            <div className="w-32 h-32">
              <Avatar className=" w-full h-full">
                <AvatarImage className="" src={AvatarDemo} />
              </Avatar>
            </div>
            <div className="flex gap-2 flex-col">
              <Button variant="primary" className=" rounded-full">
                Upload Photo
              </Button>
              <Button variant="ghost" className=" underline">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className=" font-bold">Image requirements</p>
            <ul className="text-black/60 list-disc pl-8 ">
              <li>Contains min. 400 x 400px </li>
              <li> Max. 2MB files </li>
              <li>Your face or company logo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-[1px] w-full bg-black/20"></div>
      <div className="flex flex-col  gap-10 pb-20">
        <p className=" font-bold">User Details</p>
        <div className="flex flex-col gap-4">
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-2 w-full">
              <p>First Name*</p>
              <Input
                placeholder="John "
                className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p>Last Name*</p>
              <Input
                placeholder="Kent"
                className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Email*</p>
            <Input
              placeholder="johnkent123@yahoo.com"
              className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Password*</p>
            <Input
              type="password"
              placeholder="********"
              className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
            />
            <p className=" text-sm text-black/60">Change Password</p>
          </div>
        </div>
        <div className="w-full flex items-end justify-end">
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};
