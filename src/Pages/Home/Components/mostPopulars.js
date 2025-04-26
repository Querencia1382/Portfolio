import React from "react";
import PopularItem from "./popularItem";


export default function MostPopular(){

    const [items , setItems] = React.useState([])


    React.useEffect(() => {

        const dataFetcher = async () => {
                const req = await fetch("https://fakestoreapi.com/products")
                const data = await req.json()
                let displayItems = []
                for(let i = 4; i < 14; i++){
                    displayItems.push(<PopularItem key={data[i].id} item={data[i]}/>)
                }
                setItems(displayItems)
            }
        dataFetcher()
    },[])


    return (
        <>
        <h2 className="title--h2">Most popular products</h2>
        <div className="most--popular">
            {items}
        </div>
        </>
    )
}

// React.useEffect(() => {

//     const dataFetcher = async () => {
//             const req = await fetch("https://fakestoreapi.com/products")
//             const data = await req.json()
//             let counter = 0
//             let displayItems = []
//             let randomValue = 0
//             for(let i = 4; i < data.length; i++){
//                 if(counter === 10 || i === data.length - 1){
//                     break
//                 }
//                 randomValue = Math.random() * 10
//                 if(randomValue > 5){
//                     displayItems.push(<PopularItem key={data[i].id} item={data[i]}/>)
//                     counter += 1
//                 }
//             }
//             setItems(displayItems)
//         }
//     dataFetcher()
// },[])