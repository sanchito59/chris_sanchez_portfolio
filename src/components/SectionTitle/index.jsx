import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

const CenteredTitle = styled(Title)`
  text-align: center;
`;

const SectionTitle = ({ children }) => {
  return <CenteredTitle level={4}>{children}</CenteredTitle>;
};

export default SectionTitle;
