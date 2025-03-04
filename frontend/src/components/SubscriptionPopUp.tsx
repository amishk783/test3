import { Modal } from "./Modal";
import { Button } from "./ui/button";

export const SubscriptionPopUp = () => {
  return (
    <Modal>
      <div className="w-1/3 mt-24 bg-white h-min p-10 rounded-xl font-manrope ">
        <div className="flex flex-col gap-6 w-full items-center justify-center">
          <h2 className="w-2/3 text-center pb-6 font-bold text-5xl ">
            Get access to this article
          </h2>

          <div className=" relative flex flex-col gap-6 w-full border border-black/30 p-8 rounded-2xl">
            <div className=" absolute flex items-center justify-center left-[40%] -top-4 w-20 h-8 bg-green-800 rounded-full text-white">
              Monthly
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <p className="  font-bold">Premium</p>
                <p className="text-black/70">Unlimited access</p>
              </div>
              <h5 className="text-3xl ">
                $4.99
                <span className="text-sm text-black/70">/month</span>
              </h5>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/70 to-transparent "></div>

            <Button className=" rounded-full py-6" variant="primary">
              Start Free Trial & Upgrade
            </Button>
          </div>
          <div className=" relative flex flex-col gap-6 w-full border border-black/30 p-8 rounded-2xl">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Unlock Now</p>
                <p className="text-black/70">
                  Use mediapay to unlock this article
                </p>
              </div>
              <h5 className="text-3xl ">
                $1
                <span className="text-sm text-black/70">/month</span>
              </h5>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/70 to-transparent "></div>

            <Button className=" font-bold py-6 rounded-full " variant="outline">
              Unlock with Mediapay
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
