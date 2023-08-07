import styled from "styled-components";

const Text = styled.h1`
  font-size: clamp(24px, 2.5vw, 30px);
  color: black;
  margin-bottom: 20px;
  text-align: left;
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

export default Title;
