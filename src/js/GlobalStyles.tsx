import { createComponent } from "@opendash/state";
import React from "react";
import * as styled from "styled-components";

const Globalstyle = styled.createGlobalStyle`
  #opendash-header {
    background-color: #fff;
  }
`;

export const GlobalStyles = createComponent(({}) => {
  return <Globalstyle></Globalstyle>;
});
