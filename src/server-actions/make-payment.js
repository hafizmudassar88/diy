"use server";

import { Client } from "square";
import { randomUUID } from "crypto";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment:
    process.env.ENVIRONMENT === "production" ? "production" : "sandbox",
});

export async function makePayment(sourceId, amount) {
  try {
    amount = Number(amount);

    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: "USD",
        amount: amount,
      },
    });
    return result;
  } catch (error) {
    console.log("error in server action: ");
  }
}
