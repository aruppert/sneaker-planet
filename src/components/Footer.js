import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "react-bootstrap";
import Pinterest from "../icons/Pinterest";
import Instagram from "../icons/Instagram";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";

const SocialMedia = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export default function Footer() {
  return (
    <Navbar bg="dark" fixed="bottom">
      <aside>© by Sneaker Planet 2020</aside>
      <SocialMedia>
        <Github />
        <Facebook />
        <Instagram />
        <Pinterest />
      </SocialMedia>
    </Navbar>
  );
}
