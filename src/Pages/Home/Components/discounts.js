import React from "react"
import Discounted from "./discounted-Item";
import bellSvg from "../../../icons/Filled-Bell-2D-SVG.svg"


export default function Discounts(){

    const [items , setItems] = React.useState([])


    React.useEffect(() => {

        const dataFetcher = async () => {
                const req = await fetch("https://fakestoreapi.com/products")
                const data = await req.json()
                let counter = 0
                let displayItems = []
                let randomValue = 0
                for(let i = 4; i < data.length; i++){
                    if(counter == 6 || i == data.length - 1){
                        break
                    }
                    randomValue = Math.random() * 10
                    if(randomValue > 5){
                        displayItems.push(<Discounted key={data[i].id} item={data[i]} randomValue={randomValue}/>)
                        counter += 1
                    }
                }
                setItems(displayItems)
            }
        dataFetcher()
    },[])


    return (
        <div className="discounts">
            {/* <h3 className="discounts--h3">We love you all so here are some discounts for you <img srcSet={bellSvg} width='24px'/></h3> */}
            <h2 className="discounts--h2"><img srcSet={bellSvg} width='24px'/>Discounts<img srcSet={bellSvg} width='24px'/></h2>
            <div className="discounts--div">
                {items}
            </div>
        </div>
    )
}