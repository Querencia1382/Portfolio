import React from "react";
import { useForm } from "react-hook-form";
import starSvg  from "../../../icons/Star.svg"
import rightArrowSvg from "../../../icons/Right-Arrow-Svg.svg"
import leftArrowSvg from "../../../icons/Extra/Left-Arrow-Svg.svg"
import cartSvg from "../../../icons/Cart2-SVG.svg"
import accountContext from "../../../App"


export default function Product({ product }){

    const { register , handleSubmit , formState : { errors , isSubmitting } } = useForm()


    const user = React.useContext(accountContext)


    return <div className="product">
        <img className="product--img" src={product.image} alt={product.title} />
        <form className="product--form" onSubmit={handleSubmit(data => console.log(data))}>
            <h2 style={{ display : "inline"}}>{product.title}</h2>
            <h4 className="card--header" style={{ fontWeight : "400"}}>
                {product.rating.rate}
                <img srcSet={starSvg} alt="cartSvg" className="card--icon" height="12px"/>
            </h4><br/>
            <p>{product.description}</p>
            { product.category != "jewelery" && product.category != "electronics" &&
                <>
                    <h3 style={{ display : "inline" }}>Size :</h3>
                    <input className="product--radio" type="radio" id="size--m" value="m" {...register( "size" , { required : "Please select a size"})}/>
                    <label htmlFor="size--m" className="product--label">M</label>
                    <input className="product--radio" type="radio" id="size--l" value="l" {...register( "size" , { required : "Please select a size"})}/>
                    <label htmlFor="size--l" className="product--label">L</label>
                    <input className="product--radio" type="radio" id="size--xl" value="xl" {...register( "size" , { required : "Please select a size"})}/>
                    <label htmlFor="size--xl" className="product--label">XL</label>
                    <input className="product--radio" type="radio" id="size--2xl" value="2xl" {...register( "size" , { required : "Please select a size"})}/>
                    <label htmlFor="size--2xl" className="product--label">2XL</label>
                    { errors.size && <img srcSet={leftArrowSvg} alt="left-arrow" height="24px"/>}
                    <br/>
                    <h3 style={{ display : "inline"}}>Color :</h3>
                    <input className="product--radio" type="radio" id="color--white" value="white" {...register( "color" , { required : "Please select a color"})}/>
                    <label htmlFor="color--white" className="product--label product--color--label"><div style={{ background : "white" , border : "1px black solid" }}/></label>
                    <input className="product--radio" type="radio" id="color--black" value="black" {...register( "color" , { required : "Please select a color"})}/>
                    <label htmlFor="color--black" className="product--label product--color--label"><div style={{ background : "black" }}/></label>
                    <input className="product--radio" type="radio" id="color--blue" value="blue" {...register( "color" , { required : "Please select a color"})}/>
                    <label htmlFor="color--blue" className="product--label product--color--label"><div style={{ background : "blue" }}/></label>
                    <input className="product--radio" type="radio" id="color--green" value="green" {...register( "color" , { required : "Please select a color"})}/>
                    <label htmlFor="color--green" className="product--label product--color--label"><div style={{ background : "green" }}/></label>
                    { errors.color && <img srcSet={leftArrowSvg} alt="left-arrow" height="24px"/>}
                    <br/>
                </>
            }
            <div className="card--footer" style={{ marginTop : "8px" }}>
                <h3>{product.price}$</h3>
                <img srcSet={rightArrowSvg} alt="right arrow" height="24px"/>
                <button type="submit" disabled={isSubmitting } className="product--btn">
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
//     <h3>{item.price}$</h3> || !user
// }