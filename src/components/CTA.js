import styled from "styled-components";

const CtaBtn = styled.button`
  width: 100%;
  min-height: 40px;
  border-radius: 4px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: teal;
  transition: 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  border: 1px solid teal;
  outline: none;
  cursor: pointer;
  margin-bottom: ${({ mb }) => `${mb}px`};
  &:hover {
    color: teal;
    background-color: white;
  }
`;

const CTA = ({ onClick = () => {}, text = "", type = "submit", mb = 0 }) => {
  return (
    <CtaBtn mb={mb} type={type} onClick={onClick}>
      {text}
    </CtaBtn>
  );
};

export default CTA;
