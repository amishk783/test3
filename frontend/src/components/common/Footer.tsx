import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <div className="w-full h-min font-manrope px-4 md:px-10 lg:px-20 bg-secondary ">
      <div className="w-full py-10 border-b flex flex-col gap-8  md:flex-row justify-between border-black/30">
        <Link to="/" className="w-36 h-10">
          <img src="/logo.png" className=" w-full h-full aspect-square " />
        </Link>
        <div className="flex gap-10 md:gap-20 md:px-24">
          <div className="flex flex-col gap-5">
            <h5 className=" font-semibold text-xl">Categories</h5>
            <ul className="flex flex-col list-none gap-4 text-black/70">
              <li>Metro News</li>
              <li>Bus Updates</li>
              <li>Rail Developments</li>
              <li>Infrastructure</li>
              <li>Policy & Advocacy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="font-semibold text-xl">Contact Us </h5>
            <ul className="flex flex-col list-none gap-4 text-black/70">
              <li>Contact Us</li>
              <li>Leave a tip</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center md:flex-row justify-between pt-12">
        <div className="flex flex-col items-center md:flex-row  gap-5 text-black/70">
          <p>© 2025 Transitly. All rights reserved.</p>
          <p className="underline">Cookies Settings</p>
        </div>
        <SocialLinks />
      </div>
      <div className="flex flex-col py-10 md:text-lg gap-5 text-black/70">
        <p>
          The information provided on Transitly (“we,” “our,” or “us”) is for
          general informational purposes only. While we strive to provide
          accurate, up-to-date, and reliable transit-related news, updates, and
          insights, we make no warranties or representations about the
          completeness, accuracy, or reliability of any content found on our
          website, mobile application, or other digital platforms
        </p>
        <p>
          Transitly reserves the right to update, modify, or revise this
          disclaimer at any time without prior notice. Users are encouraged to
          review this page periodically to stay informed of any changes.
          Continued use of the website after changes to this disclaimer
          constitute acceptance of the revised terms.
        </p>
      </div>
    </div>
  );
};
