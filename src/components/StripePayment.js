import React, { useState } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";

import CTA from "./CTA";
import SubTitle from "./SubTitle";
import Title from "./Title";

const Card = styled.div`
  border-radius: 6px;
  max-width: 300px;
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  margin: 0 auto;
  @media only screen and (max-width: 575px) {
    padding: 40px 15px;
  }
`;
const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51NcOFpGB8SkPm0lYdLNTW32beZMYSNq1yR46IqSAcQQq5810H2Z3odKjmjjvrZEal3CJsI1RBoXBmRfHyBJMqM9z00wqlTUqgy";
const StripePayment = () => {
  const [product, setProduct] = useState({
    name: "Go FullStack with KnowledgeHut",
    price: 1000,
    productOwner: "KnowledgeHut",
    description:
      "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
    quantity: 1,
  });

  const makePayment = async () => {
    const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:8000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <Card>
      <Title title={product.name} />
      <SubTitle title={product.description} />
      <CTA text={` Buy Now for ${product.price}`} onClick={makePayment} />
    </Card>
  );
};

export default StripePayment;
