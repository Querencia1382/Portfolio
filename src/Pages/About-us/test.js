import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../-Components/loading";


export default function Test(){

    // const { data , isLoading , isSuccess , isError , error} = useQuery({
    //     queryFn : async () => {
    //         const response = await fetch('https://fakestoreapi.com/users')
    //         const data = await response.json()
    //         return data
    //     },
    //     queryKey : ["test"]
    // })


    // if(isSuccess){
    //     console.log(data)
    // }

    return <Loading width="160px" height="160px" size={40} margin="24px" borderRadius="24px"/>
}