import { useQuery } from "@tanstack/react-query";
import React from "react"
import Item from "./card"


export default function SlideBar(props){

    const { data , isLoading , isError , error } = useQuery({
        queryKey : ["products"],
        queryFn : async () => {
            const request = await fetch(`https://fakestoreapi.com/products`)
            const data = await request.json()
            return data
        }
    })


    if(isLoading){
        return <h2>is Loading...</h2>
    }
    else {

        let displayList = []


        if(props.filterBy){
            for(let i = 0; i < data.length; i++){
                if(data[i].category === props.filterBy && data[i].id != props.productID){
                    displayList.push(<Item key={data[i].id} item={data[i]} discount={false}/>)
                }
            }
        }
        else {
            let counter = 0
            let randomValue = 0
            for(let i = 4; i < data.length; i++){
                if(counter == 6 || i == data.length - 1){
                    break
                }
                randomValue = Math.random() * 10
                if(randomValue > 5){
                    displayList.push(<Item key={data[i].id} item={data[i]} discount={props.discount == true ?(Math.random() * (40 - 20) + 20) : false}/>)
                    counter += 1
                }
            }
        }

        
        return (
            <div className="slide--bar">
                <h2 className="title--h2">{props.title}</h2>
                <div className="slide--bar--div">
                    {displayList}
                </div>
            </div>
        )
    }
}