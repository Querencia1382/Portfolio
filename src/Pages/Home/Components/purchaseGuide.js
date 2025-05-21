import React from "react";


export default function PurchaseGuide(){

    return (
        <div className="purchase--guide">
            <div className="grid--imgs">
                <div className="grid--img" alt="img--1"/>
                <div className="grid--img" alt="img--2"/>
                <div className="grid--img" alt="img--3"/>
                <div className="grid--img" alt="img--4"/>
            </div>
            <div className="details">
                <h2>Buying guide</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam culpa quaerat iste repellat. Voluptatibus ad molestias esse nobis fugiat</p>
                <ol className="guide--list">
                    <li>Browse for your items</li>
                    <li>Pay for them</li>
                    <li>Receive them</li>
                    <li>Enjoy them!</li>
                </ol>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            </div>
        </div>
    )
}