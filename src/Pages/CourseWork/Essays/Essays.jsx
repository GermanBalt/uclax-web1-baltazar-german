import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay question={`Q1:`}>
                HTML (HyperText Markup Language): HTML is used to create the
                structure and content of a webpage. It defines elements like
                headings, paragraphs, lists, links, images, and other multimedia
                elements. CSS is used to style and layout the elements defined
                by HTML. It controls the appearance of the webpage, including
                colors, fonts, spacing, and positioning. JavaScript is used to
                create interactive and dynamic content on webpages. It enables
                functionalities such as form validation, dynamic content
                updates, animations, and handling user events (like clicks and
                keyboard inputs).
            </SingleEssay>
            <SingleEssay question={`Q2:`}>
                Git is the underlying tool for version control. GitHub is a
                service that hosts Git repositories and provides collaboration
                tools. Git can be used independently of GitHub, but GitHub
                relies on Git to manage repositories.
            </SingleEssay>
            <SingleEssay question={`Q3:`}>
                jQuery is great for simplifying JavaScript tasks such as DOM
                manipulation and AJAX. React is more suited for building
                complex, dynamic user interfaces with reusable components and
                efficient state management.
            </SingleEssay>
            <SingleEssay question={`Q4:`}>
                Front-End Developers focus on the visual and interactive aspects
                of a web application, working with client-side technologies.
                Back-End Developers handle the server-side logic, database
                interactions, and application architecture, working with
                server-side technologies.
            </SingleEssay>
            <SingleEssay question={`Q5:`}>
                React Router is used for internal navigation within the app.
                Tags are used for linking to external URLs. Static Assets can be
                linked from the public directory or imported directly into
                components.
            </SingleEssay>
            <SingleEssay question={`Q6:`}>
                React Router is used for internal navigation within the app.
                Tags are used for linking to external URLs. Static Assets can be
                linked from the public directory or imported directly into
                components.
            </SingleEssay>
            <SingleEssay question={`Q7:`}>
                JPG: Best for photographs with complex colors, lossy
                compression. GIF: Best for simple graphics and animations,
                limited to 256 colors. PNG: Best for high-quality images with
                transparency, lossless compression. SVG: Best for scalable
                vector graphics, infinitely scalable with small file sizes for
                simple graphics.
            </SingleEssay>
        </EssaysStyled>
    );
};
export default Essays;

const EssaysStyled = styled.div``;
