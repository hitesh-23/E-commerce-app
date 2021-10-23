import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div`


`
const Wrapper = styled.div`
    padding : 50px;
    display : flex;

`
const ImgContainer = styled.div`
    flex : 1;

`
const Image = styled.img`
    width : 100%;
    height : 90vh;
    object-fit:cover;

`
const InfoContainer = styled.div`
flex : 1;
padding : 0px 50px;


`

const Title = styled.h1`
    font-weight : 200;


`
const Desc = styled.p`
    margin : 20px 0px;

`
const Price = styled.span`
    font-weight : 200;
    font-size : 40px;
    

`
const Filter = styled.div`
    display: flex;
    align-items : center;
    justify-content : center;

`

const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 50%;
    margin : 30px 0px;


`
const FilterTitle = styled.span`
    font-size : 20px;
    font-weight:200;



`
const FilterColor = styled.div`
    width : 20;
    height : 20;
    border-radius: 50%;
    color: #${prop => prop.color};
    margin : 0px 5px;

`
const FilterSize = styled.select`
        margin-left : 10px;
        padding : 

`
const FilterSizeOption = styled.option`

`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                <Image src="https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>It’s true that while quite similar to classic Lorem Ipsum, this alternative has a darker vibe that comes from using words like “de carne lumbering animata corpora quaeritis”. With that said, we still love this option because of how subtle it is compared to some of the other Lorem Ipsum alternatives.</Desc>
                    <Price>1269</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={666699} />
                            <FilterColor color={999966} />
                            <FilterColor color={808080}/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>

                </InfoContainer>
                
                </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
