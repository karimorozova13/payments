import styled from "styled-components";

const Sub = styled.p`
  color: #8b909b;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const SubTitle = ({ title }) => {
  return <Sub>{title}</Sub>;
};

export default SubTitle;
