import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SettingsProfile } from "./profile";
import { cn } from "@/lib/utils";
import { SettingsPayments } from "./subscription";

const Settings = () => {
  const [currentSettingTab, setCurrentSettingTab] = useState<
    "profile" | "subscription"
  >("profile");
  const handleTabChange = (tab: "profile" | "subscription") => {
    if (tab === currentSettingTab) return;

    setCurrentSettingTab(tab);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-10 lg:gap-20">
      <div className=" flex md:justify-end px-4 lg:px-10 lg:w-1/3 bg-secondary py-10  ">
        <div className="flex flex-col lg:w-1/2 gap-4 ">
          <h4 className=" text-4xl font-bold">Settings</h4>
          <Button
            onClick={() => handleTabChange("profile")}
            variant="outline"
            className={cn(
              " pr-8 rounded-full justify-start bg-transparent",
              currentSettingTab === "profile" && "bg-white"
            )}
          >
            Profile information
          </Button>
          <Button
            onClick={() => handleTabChange("subscription")}
            variant="outline"
            className={cn(
              " pr-8 rounded-full justify-start bg-transparent",
              currentSettingTab === "subscription" && "bg-white"
            )}
          >
            Subscription and Payments
          </Button>
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="lg:w-1/2 px-4">
          {currentSettingTab === "profile" && <SettingsProfile />}
          {currentSettingTab === "subscription" && <SettingsPayments />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
