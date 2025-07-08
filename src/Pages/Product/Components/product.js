import React from "react";
import { useForm } from "react-hook-form";
import starSvg  from "../../../icons/Star.svg"
import rightArrowSvg from "../../../icons/Right-Arrow-Svg.svg"
import cartSvg from "../../../icons/Cart2-SVG.svg"


export default function Product({ product }){

    return <div className="product">
        <img src={product.image} alt={product.title} />
        <form className="product--form">
            <h2>{product.title}</h2>
            <h4 className="card--header">
                {product.rating.rate}
                <img srcSet={starSvg} alt="cartSvg" className="card--icon" height="12px"/>
            </h4><br/>
            <p>{product.description}</p>
            { product.category != "jewelery" && product.category != "electronics" &&
                <>
                    <h3 style={{ display : "inline"}}>Size :</h3>
                    <label htmlFor="size--m">M<input type="checkbox" id="size--m"/></label>
                    <label htmlFor="size--l">L<input type="checkbox" id="size--l"/></label>
                    <label htmlFor="size--xl">XL<input type="checkbox" id="size--xl"/></label>
                    <label htmlFor="size--2xl">2XL<input type="checkbox" id="size--2xl"/></label>
                    <h3 style={{ display : "inline"}}>Error</h3>
                    <br/>
                    <h3 style={{ display : "inline"}}>Color :</h3>
                    <label htmlFor="color--white">White<input type="checkbox" id="color--white"/></label>
                    <label htmlFor="color--black">Black<input type="checkbox" id="color--black"/></label>
                    <label htmlFor="color--blue">Blue<input type="checkbox" id="color--blue"/></label>
                    <label htmlFor="color--green">Green<input type="checkbox" id="color--green"/></label>
                    <h3 style={{ display : "inline"}}>Error</h3>
                    <br/>
                </>
            }
            <div className="card--footer">
                <h3>{product.price}$</h3>
                <img srcSet={rightArrowSvg} alt="right arrow" height="24px"/>
                <button type="submit" className="card--anchor">
                    <img srcSet={cartSvg} alt="cartSvg" height="36px"/>+
                </button>
            </div>
        </form>
    </div>
}

// {
//     discount ?             
//     <div className="discounted--card--container">
//         <h3 className="discounted">{item.price}$</h3>
//         <h3>{Math.ceil(item.price * (100 - discount) / 100)}$</h3>
//     </div> :
//     <h3>{item.price}$</h3>
// }