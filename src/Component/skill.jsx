import "../CSS/Skill.css"
import "../CSS/AboutContent.css"
import linuxIcon from "../img/pngwing.com.png"
import JavascriptIcon from "../img/Javascript.webp"
import githubIcon from "../img/github_logo_icon_229278.webp"
import RestApiIcon from "../img/api.png"
import ReactIcon from "../img/react-logo-rounded-free-png.webp"
import NodejsIcon from "../img/Nodejs.png"
import TailwindIcon from "../img/tailwindcss.png"
import SoftwareDevIcon from "../img/SoftwareDeveloper.png"
import ProblemSolvingIcon from "../img/problem-solving.png"
import { useEffect, useState } from "react"

function skillHover(){
    const skillBox = document.querySelectorAll('.Skill-box');
    const handleMouseOver = (event) => {
        event.currentTarget.style.transform = 'translateY(-10px)';
    };
    const handleMouseOut = (event) => {
        event.currentTarget.style.transform = 'translateY(0px)';
    };

    skillBox.forEach((box) => {
        box.addEventListener('mouseenter', handleMouseOver);
        box.addEventListener('mouseleave', handleMouseOut);
    });


    return () => {
        skillBox.forEach((box) => {
            box.removeEventListener('mouseenter', handleMouseOver);
            box.removeEventListener('mouseleave', handleMouseOut);
        });
    };
}

function Skill(){
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => skillHover(), []);

    return(
        <div id="Skill" className="Skill-Section">
            <div className="Skill-banner">
                <h4 className="Heading">Skill...</h4>
                <ul className="Skill-Display">
                <li className="Skill-box" onMouseEnter={() => setHoveredSkill("Software Developer")} onMouseLeave={() => setHoveredSkill(null)}>
                    Software Developer
                    <img className="icon" src={SoftwareDevIcon} alt="Software Developer logo" style={{
                        opacity: hoveredSkill === "Software Developer" ? 1 : 0,
                        visibility: hoveredSkill === "Software Developer" ? "visible" : "hidden"
                    }} />
                </li>
                <li className="Skill-box" onMouseEnter={() => setHoveredSkill("Javascript")} onMouseLeave={() => setHoveredSkill(null)}>
                    Javascript
                    <img className="icon" src={JavascriptIcon} alt="Javascript logo" style={{
                        opacity: hoveredSkill === "Javascript" ? 1 : 0,
                        visibility: hoveredSkill === "Javascript" ? "visible" : "hidden"
                    }} /></li>
                <li className="Skill-box" onMouseEnter={() => setHoveredSkill("React")} onMouseLeave={() => setHoveredSkill(null)}>
                    React
                    <img className="icon" src={ReactIcon} alt="React logo" style={{
                        opacity: hoveredSkill === "React" ? 1 : 0,
                        visibility: hoveredSkill === "React" ? "visible" : "hidden"
                    }} />
                </li>
                <li className="Skill-box" onMouseEnter={() => setHoveredSkill("Problem Solving")} onMouseLeave={() => setHoveredSkill(null)}>
                    Problem Solving
                    <img className="icon" src={ProblemSolvingIcon} alt="Problem Solving logo" style={{
                        opacity: hoveredSkill === "Problem Solving" ? 1 : 0,
                        visibility: hoveredSkill === "Problem Solving" ? "visible" : "hidden"
                    }} />
                </li>
                <li className="Skill-box"
                onMouseEnter={() => setHoveredSkill("Tailwind CSS")} onMouseLeave={() => setHoveredSkill(null)}>
                    Tailwind CSS
                    <img className="icon" src={TailwindIcon} alt="Tailwind CSS logo" style={{
                        opacity: hoveredSkill === "Tailwind CSS" ? 1 : 0,
                        visibility: hoveredSkill === "Tailwind CSS" ? "visible" : "hidden"
                    }} />
                </li>
                <li className="Skill-box" onMouseEnter={() => setHoveredSkill("Node.js")} onMouseLeave={() => setHoveredSkill(null)}>
                    Node.js
                    <img className="icon" src={NodejsIcon} alt="Node.js logo" style={{
                        opacity: hoveredSkill === "Node.js" ? 1 : 0,
                        visibility: hoveredSkill === "Node.js" ? "visible" : "hidden"
                    }} />
                </li>
                <li className="Skill-box"
                onMouseEnter={() => setHoveredSkill("Git & GitHub")}
                onMouseLeave={() => setHoveredSkill(null)}>
                    Git & GitHub
                    <img className="icon" src={githubIcon} alt="GitHub logo" style={{
                        opacity: hoveredSkill === "Git & GitHub" ? 1 : 0,
                        visibility: hoveredSkill === "Git & GitHub" ? "visible" : "hidden"
                    }} />
                </li>
                <li className="Skill-box" onMouseEnter={() => setHoveredSkill("REST APIs")} onMouseLeave={() => setHoveredSkill(null)}>
                    REST APIs
                    <img className="icon" src={RestApiIcon} alt="REST API logo" style={{
                        opacity: hoveredSkill === "REST APIs" ? 1 : 0,
                        visibility: hoveredSkill === "REST APIs" ? "visible" : "hidden"
                    }} />
                </li>
                    <li
                        className="Skill-box"
                        onMouseEnter={() => setHoveredSkill("Linux")}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        Linux
                        <img
                            className="icon"
                            src={linuxIcon}
                            alt="Linux logo"
                            style={{
                                opacity: hoveredSkill === "Linux" ? 1 : 0,
                                visibility: hoveredSkill === "Linux" ? "visible" : "hidden"
                            }}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skill