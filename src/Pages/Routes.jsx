import { Routes, Route, Hashrouter } from "react-router-dom";

// global styles
import "@/Common/css/normalize.css";
import "Common/css/global.scss";

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";

// page components
import Home from "./Home";
import Staff from "./Staff";
import Contact from "./Contact";

// course work page components
import CourseWorkLayout from "./Coursework/CourseworkLayout.jsx";
import SunAndMoon from "./Coursework/SunAndMoon/SunAndMoon.jsx";
import Essays from "./Coursework/Essays.jsx";
import Responsivedesign from "./Coursework/Responsivedesign.jsx";

const MyRoutes = () => {
    return (
        <Hashrouter>
            <Routes>
                <Route element={<PagesLayout />}>
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="Staff" />
                    <Route element={<Contact />} path="Contact" />

                    <Route element={<CourseWorkLayout />} path="course-work">
                        <Route element={<Essays />} path="" />
                        <Route element={<SunAndMoon />} path="sun-and-moon" />
                        <Route
                            element={<Responsivedesign />}
                            path="responsive"
                        />
                    </Route>
                </Route>
            </Routes>
        </Hashrouter>
    );
};

export default MyRoutes;