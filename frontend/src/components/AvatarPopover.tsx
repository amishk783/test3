import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useMsal } from "@azure/msal-react";
import { usePaywall } from "@/store/PaywallProvider";

interface Props {
  src: string;
  className?: string;
}

export const AvatarPopover: React.FC<Props> = ({ src, className }) => {
  const { instance } = useMsal();
   const { resetArticleCounter } = usePaywall();
  const handleLogout = () => {
    resetArticleCounter();
    instance.logoutRedirect(); // Redirect logout
  };
  return (
    <div className={cn("w-min h-min", className)}>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage width={24} height={24} src={src} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="max-w-48" align="end">
          <Button
            onClick={handleLogout}
            className="w-full"
            variant="destructive"
          >
            Sign out
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
