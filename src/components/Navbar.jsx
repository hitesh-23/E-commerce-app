import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  align-items: center;
`;

const Right = styled.div`
display : flex;
align-items: center;
justify-content: flex-end;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color : "gray", fontSize : 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HitzCART</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem><Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined color="action" />
          </Badge></MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
