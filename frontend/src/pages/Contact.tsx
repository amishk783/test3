import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import OverlayImage from "@/assets/contact_us_overlay.jpeg";
const Contact = () => {
  return (
    <div className="w-full h-full py-10 md:py-20 px-4  xl:max-container">
      <div className="flex items-center flex-col justify-center md:gap-24  ">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 ">
          <div className="flex flex-col gap-2 justify-center">
            <p className="font-bold">Reach out to us</p>
            <h3 className=" font-bold text-5xl md:text-6xl">Contact Us</h3>
            <p className="text-black/70 w-[90%] md:text-xl">
              We’d love to hear from you! Whether you have questions, feedback,
              or partnership inquiries, feel free to reach out.
            </p>
          </div>
          <div className="flex flex-col p-5 md:p-10 md:w-1/2 gap-6  border-[#226A10] border-4 rounded-xl">
            <div className="flex flex-col gap-2">
              <p>Name*</p>
              <Input
                placeholder="John Kent"
                className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Email*</p>
              <Input
                placeholder="johnkent123@yahoo.com"
                className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Phone*</p>
              <div>
                <Input
                  placeholder="+1 (212) 555-7890"
                  className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
                />
                <img />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p>Message</p>
              <Textarea
                placeholder="Your message here"
                className="border-black/20 h-48 bg-secondary "
              />
            </div>
            <Button variant="primary">Send Message</Button>
          </div>
        </div>
        <div className="w-full min-h-[528px] relative flex items-center justify-center overflow-hidden rounded-2xl  ">
          <img
            src={OverlayImage}
            className=" absolute w-full h-[320px] md:h-[528px] object-center -z-10 object-cover rounded-xl brightness-50"
          />
          <div className="lg:w-1/2 text-center h-full flex flex-col px-4 text-white items-center justify-center">
            <p className=" font-bold">Subscribe to Our Newsletter</p>
            <h4 className=" font-bold text-2xl md:text-5xl">
              Stay updated with the latest transit news!
            </h4>
            <div className="flex py-4 relative md:w-1/2  lg:w-2/3">
              <Input
                placeholder="Enter Your Email Here"
                className="bg-white rounded-full text-black"
              />
              <Button
                variant="primary"
                className=" absolute rounded-full hidden md:flex right-0 md:px-10"
              >
                Join Newsletter
              </Button>
              <Button
                variant="primary"
                className=" absolute rounded-full md:hidden flex right-0 px-5"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
