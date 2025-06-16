import React from "react"
import { Link } from "react-router-dom"
import starSvg from "../../icons/Star.svg"
import discountSvg from "../../icons/discount-2.svg"
import cartSvg from "../../icons/Cart2-SVG.svg"
import rightArrowSvg from "../../icons/arrow-narrow-right-Svg.svg"


export default function Card({item , discount}){



    return (
        <div className="card">
                {
                    discount ? 
                        <h4 className="card--header">
                            {Math.ceil(discount)}
                            <img srcSet={discountSvg} alt="cartSvg" height="16px"/>
                        </h4> :
                        <h4 className="card--header">
                            {item.rating.rate}
                            <img srcSet={starSvg} alt="cartSvg" className="card--icon" height="12px"/>
                        </h4>
                }
            <img src={item.image} alt={item.title} className="card--img"/>
            <h3 className="card--title">{item.title}</h3>
            <h4 className="card--price">Price:</h4>
            <div className="card--footer">
                {
                    discount ?             
                    <div className="discounted--card--container">
                        <h3 className="discounted">{item.price}$</h3>
                        <h3>{Math.ceil(item.price * (100 - discount) / 100)}$</h3>
                    </div> :
                    <h3>{item.price}$</h3>
                }
                <img srcSet={rightArrowSvg} alt="right arrow" height="24px"/>
                <Link to={`/Product/${item.id}`} className="card--anchor">
                    <img srcSet={cartSvg} alt="cartSvg" height="36px"/>+
                </Link>
            </div>
        </div>
    )
}

{/*     const { data , isLoading , isError , error } = useQuery({
        queryKey : ["products"],
        queryFn : async () => {
            const request = await fetch(`https://fakestoreapi.com/products`)
            const data = await request.json()
            return data
        }
    })


    if(isLoading){

        return
    }else {}

import { useQuery } from "@tanstack/react-query";*/}