/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import "./ProductCard.css";

function ProductCard({ p }) {
  const [isFullDescription, setIsFullDescription] = useState(false);
  const handleExpand = () => {
    //setIsFullDescription((isFullDescription)? false : true);
    setIsFullDescription(!isFullDescription);
  };
  return (
    <article>
      <h3>{p.tittle}</h3>
      <div style={{ display: "flex" }}>
        <img src={p.image} alt={p.tittle} style={{ width: "50%" }} />
        <div>
          <p>{p.category}</p>
          <p>{p.price}</p>
          <button>add to cart</button>
        </div>
      </div>
      {isFullDescription ? (
        <span>
          {p.description}
          <MdExpandLess size={27} onClick={handleExpand} />
        </span>
      ) : (
        <span>
          {p.description.slice(0, 50)}...{" "}
          <MdExpandMore size={27} onClick={handleExpand} />
        </span>
      )}
    </article>
  );
}

export default ProductCard;
