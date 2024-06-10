import styled from "styled-components";
import React from "react";
import ReactPlayer from "react-player";

const Youtube = () => {
    return (
        <YoutubeStyled>
            Youtube
            <ReactPlayer url="https://www.youtube.com/watch?v=KdF3jpjiZJY" />
        </YoutubeStyled>
    );
};

export default Youtube;

const YoutubeStyled = styled.div`
    border-radius: 30px 30px 0px 0px;
    margin: 270px;
    display: inline-block;
    width: clamp(75px, 20%, 150px);
`;
