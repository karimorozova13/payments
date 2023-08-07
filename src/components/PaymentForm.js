import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import StripePayment from "./StripePayment";
import SubTitle from "./SubTitle";
import Title from "./Title";

const Wrap = styled.div`
  width: 100%;
  padding: 40px;
  @media only screen and (max-width: 575px) {
    padding: 40px 15px;
  }
`;
const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 40px;
  @media only screen and (max-width: 575px) {
    padding: 40px 15px;
  }
`;
const InputWrap = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    gap: 0;
  }
`;

const PaymentForm = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrap>
      <FormContainer>
        <Title title={"Final step, make the payment."} />
        <SubTitle
          title={
            "To finalize your subscription, kindly complete your payment using a valid credit card."
          }
        />
        <StripePayment />
      </FormContainer>
    </Wrap>
  );
};

export default PaymentForm;
