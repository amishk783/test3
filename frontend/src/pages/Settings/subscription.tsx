import { PaymentMethodCard } from "@/components/PaymentMethodCard";
import { Transactions } from "@/components/transaction";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState } from "react";

import demoPayment1 from "/src/assets/payment/payment_1.png";
import demoPayment2 from "/src/assets/payment/payment_2.png";
import demoPayment3 from "/src/assets/payment/payment_3.png";
const demoPayment = [
  {
    id: 1,
    cardName: "American Express",
    cardNumber: "**** 8092",
    expireDate: "12/26",
    cardImage: demoPayment1,
  },
  {
    id: 2,
    cardName: "Mastercard",
    cardNumber: "**** 8092",
    expireDate: "12/26",
    cardImage: demoPayment2,
  },
  {
    id: 3,
    cardName: "Visa",
    cardNumber: "**** 8092",
    expireDate: "12/26",
    cardImage: demoPayment3,
  },
];

export const SettingsPayments = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<number>(
    demoPayment[0].id
  );
  return (
    <div className="w-full h-full pb-20">
      <div className="w-full py-12 border-black/20 border-b ">
        {/* info */}
        <p className=" font-bold pb-8">Subscription</p>
        <div className="flex md:p-4 flex-col gap-5">
          <div className="pb-8 border-b border-black/20 ">
            <div className="flex justify-between items-center">
              <div>
                <p className="  font-bold">Premium</p>
                <p className="text-black/70">Everthing Free Plan, PLUS</p>
              </div>
              <h5 className="text-3xl ">
                $4.99
                <span className="text-sm text-black/70">/month</span>
              </h5>
            </div>
          </div>
          <p>21 Days remaining, you can re activate once it ends...</p>
          <Button className=" py-6 rounded-full" variant="destructive">
            De-activate
          </Button>
        </div>
      </div>
      {/* billing */}
      <div className="flex flex-col py-14 border-b border-black/20 gap-10">
        <p className=" font-bold">Billing Information</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <p>Full Name*</p>
            <Input
              placeholder="John Kent"
              className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p>Address*</p>
            <Input
              placeholder="Kent"
              className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>State*</p>
            <Input
              placeholder="Los Angles"
              className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Zip Code*</p>
            <Input
              placeholder="9001"
              className="border-black/20 py-6 px-6 bg-secondary  rounded-full"
            />
          </div>
        </div>
      </div>
      {/* payment info */}
      <div className="flex flex-col py-14 border-b border-black/20 gap-10">
        <p className=" font-bold">Payment Information</p>
        <div className="flex flex-col gap-4">
          {demoPayment.map((method) => (
            <PaymentMethodCard
              key={method.id}
              active={method.id === activePaymentMethod}
              onSelect={() => setActivePaymentMethod(method.id)}
              {...method}
            />
          ))}

          <div className="flex justify-between gap-2">
            <p>Add a new payment method</p>
            <p className=" underline">Click Here</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-14 pb-20 gap-10">
        <p className=" font-bold">Transactions Information</p>
        <Transactions />
      </div>
    </div>
  );
};
