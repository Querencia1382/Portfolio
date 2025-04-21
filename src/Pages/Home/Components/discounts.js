import React from "react"
import Discounted from "./discounted-Item";
import bellSvg from "../../../icons/Thin-Bell-SVG.svg"


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
            <p className="discounts--p">We love you all se here are some discounts for you <img srcSet={bellSvg} width='24px'/></p>
            <div className="discounts--div">
                {items}
            </div>
        </div>
    )
}