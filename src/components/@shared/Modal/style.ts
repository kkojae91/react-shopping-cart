import styled from "styled-components";

import { FlexCenter } from "../../../sharedStyled/Flex";

interface ContainerProps {
  opacity: number;
}

const Container = styled(FlexCenter("div"))<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ opacity }) => opacity};

  transition: opacity 0.5s;

  p {
    text-align: center;
  }
`;

export { Container };