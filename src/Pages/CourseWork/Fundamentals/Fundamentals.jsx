import styled from "styled-components";

// Scripts
// import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";
const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>
            <ReactComponent title="Spider-Man" showDisc={true} />
            <ReactComponent title="Batman" />
            <ReactComponent title="Captain America" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
