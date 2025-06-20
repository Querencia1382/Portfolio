import React from "react"
import rightArrowSvg from "../../icons/arrow-narrow-right-Svg.svg"
import { Link } from "react-router-dom"


export default function Item(props){


    return (
        <div className='item'>
            <img className='item--img' src={props.item.image} alt={props.item.title}/>
            <h2 className='item--h2'>{props.item.title}</h2>
            <div className="item--div">
                {props.discount != false ?
                    <>
                        <h4 className="item--h4 discounted--h4">{props.item.price}$</h4>
                        <img srcSet={rightArrowSvg} width='24px'/>
                        <Link to={`/Product/${props.item.id}`} className="item--a">Only {((100 - props.discount) / 100 * props.item.price).toFixed(2)}$</Link>
                    </>
                    :
                    <>
                        <h4 className="item--h4">{props.item.price}$</h4>
                        <img srcSet={rightArrowSvg} width='24px'/>
                        <Link to={`/Product/${props.item.id}`} className="item--a">Order</Link>
                    </>   
            }
            </div> 
        </div>
    )
}
