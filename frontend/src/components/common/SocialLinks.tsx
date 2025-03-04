import FacebookIcon from "@/assets/social/facebook.png";
import InstaIcon from "@/assets/social/instagram.png";
import TwitterIcon from "@/assets/social/twitter.png";
import LinkedinIcon from "@/assets/social/linkedIn.png";

export const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <a className=" cursor-pointer">
        <img width={40} height={40} src={FacebookIcon} />
      </a>
      <a className=" cursor-pointer">
        <img width={40} height={40} src={InstaIcon} />
      </a>
      <a className=" cursor-pointer">
        <img width={40} height={40} src={TwitterIcon} />
      </a>
      <a className=" cursor-pointer">
        <img width={40} height={40} src={LinkedinIcon} />
      </a>
    </div>
  );
};
