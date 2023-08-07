import styled from "styled-components";

const SectionBg = styled.div`
  width: 100%;
  padding: 150px 0;
`;

const Section = ({ children }) => {
  return <SectionBg>{children}</SectionBg>;
};

export default Section;
