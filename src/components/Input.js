import styled from "styled-components";

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 260px;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 20px;
  label {
    color: #8b909b;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
  input {
    width: 100%;
    padding: 7px;
    border: 1px solid #8b909b;
    color: black;
    min-height: 40px;

    border-radius: 4px;
    ::placeholder {
      color: #8b909b;
      opacity: 0.6;
      font-weight: 700;
    }
  }
`;

const Input = ({ children, mb = 20 }) => {
  return <InputWrap mb={mb}>{children}</InputWrap>;
};

export default Input;
