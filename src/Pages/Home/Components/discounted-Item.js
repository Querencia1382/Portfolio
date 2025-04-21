import React from "react"
import rightArrowSvg from "../../../icons/arrow-narrow-right-Svg.svg"


export default function Discounted(props){

    const discount = React.useRef(Math.floor(Math.random() * 40))


    return (
        <div className='discounted'>
            <img className='discounted--img' src={props.item.image} alt={props.item.title} width='120px'/>
            <h2 className='discounted--h2'>{props.item.title}</h2>
            <div className="discounted--div">
                <h4 className="discounted--h4">{props.item.price}$</h4>
                <img className="dicsounted--icn" srcSet={rightArrowSvg} width='20px'/>
                <h3 className="discounted--h3">{props.item.price * (100 - discount.current) / 100}$</h3>
            </div>
        </div>
    )
}