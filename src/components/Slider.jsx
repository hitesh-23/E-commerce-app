import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from 'react';
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow : hidden;
`;

const ArrowLeft = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
  opacity: 0.5;
  z-index : 2;
`;
const ArrowRight = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  opacity: 0.5;
  z-index : 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display : flex;
  transition : all 1.5s ease;
  transform : translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color : #${props => props.bg}
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }



  return (
    <Container>
      <ArrowLeft onClick = {()=>handleClick("left")} >
        <ArrowLeftOutlined />
      </ArrowLeft>
          <Wrapper slideIndex={slideIndex} >
              {sliderItems.map(item => {
        return (<>
        <Slide bg={item.bg}>
          <ImgContainer key={item.id}>
            <Image src={item.img} />
          </ImgContainer>

          <InfoContainer>
                         <Title>{item.title}</Title>
            <Desc>
            {item.desc}
            </Desc>
            <Button>Shop Now </Button>
          </InfoContainer>
                 </Slide>
             </>)
                   }) }
      </Wrapper>

      <ArrowRight onClick = {()=>handleClick("right")}>
        <ArrowRightOutlined />
      </ArrowRight>
    </Container>
  );
};

export default Slider;
