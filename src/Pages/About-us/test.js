import React from "react";
import { useQuery } from "@tanstack/react-query";


export default function Test(){

    const { data , isLoading , isSuccess , isError , error} = useQuery({
        queryFn : async () => {
            const response = await fetch('https://fakestoreapi.com/users')
            const data = await response.json()
            return data
        },
        queryKey : ["test"]
    })


    if(isSuccess){
        console.log(data)
    }
}