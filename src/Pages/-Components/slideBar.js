import React from "react"
import Item from "./item"


export default function SlideBar(props){

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
                        displayItems.push(<Item key={data[i].id} item={data[i]} discount={props.discount == true ?(Math.random() * 40) : false}/>)
                        counter += 1
                    }
                }
                setItems(displayItems)
            }
        dataFetcher()
    },[])


    return (
        <div className="slide--bar">
            <h2 className="title--h2">{props.title}</h2>
            <div className="slide--bar--div">
                {items}
            </div>
        </div>
    )
}