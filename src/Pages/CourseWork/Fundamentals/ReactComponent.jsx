import styled from "styled-components";

const ReactComponent = (props) => {
    const { title, showDisc = false } = props;
    return (
        <ReactComponentStyled>
            <h3>{title}</h3>
            {showDisc && (
                <DisclaimerStyled>
                    Disclaimer: This film is for everyone over 13
                </DisclaimerStyled>
            )}
        </ReactComponentStyled>
    );
};

export default ReactComponent;

const ReactComponentStyled = styled.div`
    border: solid 3px #424242;
    padding: 20px;
    margin: 30px 0px;
`;
const DisclaimerStyled = styled.p`
    color: red;
    margin: 20px 0px;
`;
