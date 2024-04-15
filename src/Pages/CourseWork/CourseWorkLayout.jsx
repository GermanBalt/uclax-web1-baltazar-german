import styled from "styled-components";
import { Outlet, Navlink } from "react-router-dom";

import Inset from "@/Common/PagesLayout/Inset.jsx";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled>
            <Inset>
                <h1>Course Work</h1>
                <nav className="sublinks">
                    <Navlink to="/course-work"> Essays </Navlink>
                    <Navlink to="/course-work/sun-and-moon">
                        Sun And Moon
                    </Navlink>
                    <Navlink to="/course-work/responsive"> Responsive</Navlink>
                </nav>
                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.div``;
