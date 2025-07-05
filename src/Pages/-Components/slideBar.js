import { useQuery } from "@tanstack/react-query";
import React from "react"
import Item from "./card"
import Loading from "./loading";


export default function SlideBar({ filterBy , productID , discount }){

    const { data , isLoading ,isSuccess , isError , error } = useQuery({
        queryKey : ["products"],
        queryFn : async () => {
            const request = await fetch(`https://fakestoreapi.com/products`)
            const data = await request.json()
            return data
        }
    })


    if(!isSuccess){
        return <Loading width="calc(100% - 48px)" height="465px" margin="16px 24px" size={48} borderRadius="24px"/>
    }
    else {

        let displayList = []


        if(filterBy){
            for(let i = 0; i < data.length; i++){
                if(data[i].category === filterBy && data[i].id != productID){
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
                    displayList.push(<Item key={data[i].id} item={data[i]} discount={discount == true ?(Math.random() * (40 - 20) + 20) : false}/>)
                    counter += 1
                }
            }
        }

        
        return (
            <div className="slide--bar">
                {displayList}
            </div>
        )
    }
}