import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "../utils/getTotalCartPrice";

function Cart() {
  const { cart } = useContext(ProductsContext);
  return (
    <section className="container">
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
