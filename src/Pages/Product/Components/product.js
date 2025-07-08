import React from "react";
import { useForm } from "react-hook-form";
import starSvg  from "../../../icons/Star.svg"
import rightArrowSvg from "../../../icons/Right-Arrow-Svg.svg"
import cartSvg from "../../../icons/Cart2-SVG.svg"
import accountContext from "../../../App"


export default function Product({ product }){

    const { register , handleSubmit , formState : { errors , isSubmitting } } = useForm()


    const user = React.useContext(accountContext)


    return <div className="product">
        <img src={product.image} alt={product.title} />
        <form className="product--form" onSubmit={handleSubmit(data => console.log(data))}>
            <h2 style={{ display : "inline"}}>{product.title}</h2>
            <h4 className="card--header" style={{ display : "inline-flex"}}>
                {product.rating.rate}
                <img srcSet={starSvg} alt="cartSvg" className="card--icon" height="12px"/>
            </h4><br/>
            <p>{product.description}</p>
            { product.category != "jewelery" && product.category != "electronics" &&
                <>
                    <h3 style={{ display : "inline"}}>Size :</h3>
                    <label htmlFor="size--m">M<input type="radio" id="size--m" value="m" {...register( "size" , { required : "Please select a size"})}/></label>
                    <label htmlFor="size--l">L<input type="radio" id="size--l" value="l" {...register( "size" , { required : "Please select a size"})}/></label>
                    <label htmlFor="size--xl">XL<input type="radio" id="size--xl" value="xl" {...register( "size" , { required : "Please select a size"})}/></label>
                    <label htmlFor="size--2xl">2XL<input type="radio" id="size--2xl" value="2xl" {...register( "size" , { required : "Please select a size"})}/></label>
                    { errors.size && <h3 style={{ display : "inline" }}>{errors.size.message}</h3>}
                    <br/>
                    <h3 style={{ display : "inline"}}>Color :</h3>
                    <label htmlFor="color--white">White<input type="radio" id="color--white" value="white" {...register( "color" , { required : "Please select a color"})}/></label>
                    <label htmlFor="color--black">Black<input type="radio" id="color--black" value="black" {...register( "color" , { required : "Please select a color"})}/></label>
                    <label htmlFor="color--blue">Blue<input type="radio" id="color--blue" value="blue" {...register( "color" , { required : "Please select a color"})}/></label>
                    <label htmlFor="color--green">Green<input type="radio" id="color--green" value="green" {...register( "color" , { required : "Please select a color"})}/></label>
                    { errors.color && <h3 style={{ display : "inline" }}>{errors.color.message}</h3>}
                    <br/>
                </>
            }
            <div className="card--footer">
                <h3>{product.price}$</h3>
                <img srcSet={rightArrowSvg} alt="right arrow" height="24px"/>
                <button type="submit" disabled={isSubmitting || !user} className="card--anchor">
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