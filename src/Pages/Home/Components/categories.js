import { Link } from "react-router-dom";

export default function Categories(){

    return (
        <div className="categories">
            <h2 className="title--h2">Categories</h2>
            <Link to='Products/ManClothing' className="categories--a"></Link>
            <Link to='Products/WomanClothing' className="categories--a"></Link>
            <Link to='Products/Jewlery' className="categories--a"></Link>
            <Link to='Products/Electronics' className="categories--a"></Link>
        </div>
    )
}