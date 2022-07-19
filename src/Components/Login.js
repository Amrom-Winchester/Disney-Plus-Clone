import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Content>
                <AC>
                    <ACLogoOne src = "../Images/cta-logo-one.svg" />
                    <SignUp>Get All Fun Here</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 08/30/22, the price of Disney+
                    and The Disney Bundle will increase by $1.</Description>
                    <ACLogoTwo src = "../Images/cta-logo-two.png" />
                </AC>
                <BgImage/>
            </Content>
        </Container>
    )
};

const Container = styled.section`
    overflow : hidden
    display : flex;
    flex-direction: column;
    text-align: center;
    height: 100vh
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height : 100%;
    background-position : top;
    background-size : cover;
    background-repeat: no-repeat;
    background-image: url("../Images/disney.jpg");
    position: absolute;
    top : 0;
    right : 0;
    left : 0;
    z-index : -1;
`;

const AC = styled.div`
    max-width: 650px;
    width: 100%; 
    display: flex;
    flex-direction: column;
`;

const ACLogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    cursor: default;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-weight: bold;
    color: hsla(0,0%,95.3%,1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const ACLogoTwo = styled.img`
    max-width: 600%;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;


export default Login;