import { Link } from "react-router-dom";

export default function PopularItem(props){

    return (
        <div className="popular--item">
            <img src={props.item.image} alt={props.item.title}/>
            <h4>{props.item.title}</h4>
            <Link to={`/Products/${props.item.id}`}>Order</Link>
        </div>
    )
}