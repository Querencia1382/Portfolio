import React from "react";
import { Link } from "react-router-dom"


export default function AboutUs(){

    return (
        <div className="about--us">
            <div className="details">
                <h2>About us</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat ab, ad quae possimus delectus! Illum, quas nemo dolore assumenda vel facilis hic quaerat. Ut, exercitationem amet. Molestias, provident obcaecati.</p>
                <Link to="/About-us" className="arrow--anchor" style={{ marginRight : "24px" }}>More</Link>
            </div>
            <div className="grid--imgs">
                <div className="grid--img" alt="img--1"/>
                <div className="grid--img" alt="img--2"/>
                <div className="grid--img" alt="img--3"/>
                <div className="grid--img" alt="img--4"/>
            </div>
        </div>
    )
}