import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom : 10px;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom : 20px;
  display : flex;
  align-items : center;

`;

const Payment = styled.img`
width : 200px;
 
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HitzCART</Logo>
        <Desc>
          there anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>WOman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Track my order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem><Room style={{ marginRight : "10px" }}/>622 Dixie Path,Navi Mumbai </ContactItem>
              <ContactItem><Phone style={{ marginRight : "10px" }}/>1800-987-654 </ContactItem>
              <ContactItem><MailOutline style={{ marginRight : "10px" }}/>contact@hitzCart.com</ContactItem>
              <Payment src="https://www.horusrc.com/media/wysiwyg/pay_by_cards.jpg"/>

      </Right>
    </Container>
  );
};

export default Footer;
