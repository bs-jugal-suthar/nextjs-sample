import { useRouter } from "next/router";
import React from "react";

const Cart = () => {
  const { cart } = useRouter()?.query;
  if (!cart) return <h1>no cart found ...</h1>;
  return <div>Cart : {cart}</div>;
};

export default Cart;
