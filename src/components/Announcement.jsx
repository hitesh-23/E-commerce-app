import styled from "styled-components"




const Container = styled.div`
    height : 30px;
    background-color : teal;
    color : white;
    display:flex;
    justify-content : center;
    text-align : center;
    align-items: center;
    font-size : 14px;
    font-weight : bold.500;
    
`

const Announcement = () => {
    return (
        <Container>Great Deal!!! Free Shipping on orders ₹499 and above...</Container>
    )
}

export default Announcement
