import Logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <div className="w-full h-min font-manrope px-20 bg-secondary">
      <div className="w-full py-10 border-b flex justify-between border-black/30">
        <div className="w-36 h-10">
          <img src={Logo} className=" w-full h-full aspect-square " />
        </div>
        <div className="flex gap-20 px-24">
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
      <div className="flex justify-between pt-12">
        <div className="flex text-lg gap-5 text-black/70">
          <p>© 2023 Transitly. All rights reserved.</p>
          <p className="underline">Cookies Settings</p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col py-10 text-lg gap-5 text-black/70">
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
