"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { makePayment } from "@/server-actions/make-payment";
import React, { Suspense } from "react";
import toast from "react-hot-toast";

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  let cart = [];
  if (data) {
    try {
      const decodedData = decodeURIComponent(data);
      cart = JSON.parse(decodedData);
    } catch (error) {
      console.error("Error parsing data:", error);
    }
  }

  const totalAmount = cart.reduce((sum, item) => sum + Number(item.price), 0); // Example of calculating the total amount
  const appId = process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="w-full flex justify-center items-center gap-x-10">
        <div className="ring-1 ring-red-400 rounded-lg p-10 shadow-xl">
          <h1 className="p-5 text-center text-black font-extrabold">
            Total Amount: ${totalAmount}
          </h1>

          <div className="">
            {cart?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3"
              >
                <div>
                  <p className="text-black font-bold">{item.title}</p>
                </div>
                <p className="text-black ms-10">${item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <PaymentForm
          applicationId={appId}
          locationId={locationId}
          cardTokenizeResponseReceived={async (token) => {
            const result = await makePayment(token.token, totalAmount);

            if (result) {
              toast.success("Order placed successful");
              router.push("/booking");
              return;
            } else {
              toast.error("Payment failed, try again");
              return;
            }
          }}
        >
          <CreditCard />
        </PaymentForm>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
