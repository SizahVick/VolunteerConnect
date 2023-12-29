import React from "react";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../Components/sytles';

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                {/* <PageLogo resizeMode="cover" source={require('./../assets/img/bgk.png')}/>  */}
                <PageTitle>Connect</PageTitle>
            </InnerContainer>
        </StyledContainer>    
    );
}

export default Login;