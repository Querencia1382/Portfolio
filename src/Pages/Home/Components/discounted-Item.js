import React from "react"
import rightArrowSvg from "../../../icons/arrow-narrow-right-Svg.svg"
import { Link } from "react-router-dom"


export default function Discounted(props){

    const discount = React.useRef(Math.floor(Math.random() * 40))


    return (
        <div className='discounted' data-discount={discount.current + "%"}>
            <img className='discounted--img' src={props.item.image} alt={props.item.title} width='120px'/>
            <h2 className='discounted--h2'>{props.item.title}</h2>
            <div className="discounted--div">
                <h4 className="discounted--h4">{props.item.price}$</h4>
                <img className="dicsounted--icn" srcSet={rightArrowSvg} width='24px'/>
                <Link to={`/Products/${props.item.id}`} className="discounted--a">Only {(props.item.price * (100 - discount.current) / 100).toFixed(2)}$</Link>
            </div>
        </div>
    )
}