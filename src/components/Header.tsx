import styled from "styled-components";
import logo from "../assets/logo.svg"
import Burger from "./Burger";
import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <StyledHeader>
        <Burger open={open} setOpen={setOpen} />
       <Menu open={open} setOpen={setOpen} />
       <img src={logo} alt="logo" />
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
`