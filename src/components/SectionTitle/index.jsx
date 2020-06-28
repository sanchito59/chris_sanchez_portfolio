import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

const CenteredTitle = styled(Title)`
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin-top: 40px;
  font-size: 32px !important;
`;

const SectionTitle = ({ children, center }) => {
  return (
    <CenteredTitle level={4} center={center}>
      {children}
    </CenteredTitle>
  );
};

export default SectionTitle;
