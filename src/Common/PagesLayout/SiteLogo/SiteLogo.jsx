import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./HustleSVG.svg";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Hustle Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #000000;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
