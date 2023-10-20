import React, { useState, useEffect } from "react";
import "./Cart.css";
import cardLogo from "../../assets/images/cardLogo.png";
import { useNavigate } from "react-router";

// const items = [
// 	{
// 		image: cardLogo,
// 		desc: "product desc",
// 		price: 250,
// 		productName: "Coke",
// 	},
// 	{
// 		image: cardLogo,
// 		desc: "product desc",
// 		price: 100,
// 		productName: "Water",
// 	},
// 	{
// 		image: cardLogo,
// 		desc: "product desc",
// 		price: 4500,
// 		productName: "Pizza",
// 	},
// ];
const products = "products";
const Cart = () => {
	const [total, setTotal] = useState(0.0);
	const [items, setItems] = useState([]);
	const [quantity, setQuantity] = useState(Array(items.length).fill(0));


	const navigate = useNavigate();

	useEffect(() => {
		calculateTotal();
	}, [quantity]);

	useEffect(() => {
		fetchVirtualCart();
	}, []);

	const fetchVirtualCart = () => {
		const virtualCart  = JSON.parse(sessionStorage.getItem(products))
		console.log(virtualCart);
		setItems(virtualCart)
	};

	const decrement = (index) => {
		if (quantity[index] > 0) {
			const updatedQuantity = [...quantity];
			updatedQuantity[index]--;
			setQuantity(updatedQuantity);
		}
	};
	
	const increment = (index) => {
		if (quantity[index] > 0) {
			const updatedQuantity = [...quantity];
			updatedQuantity[index]--;
			setQuantity(updatedQuantity);
		}
	};

	const removeItem = (index) => {
		const updatedQuantity = [...quantity];
		updatedQuantity[index] = 0;
		setQuantity(updatedQuantity);
	};

	const calculateTotal = () => {
		let totalPrice = 0.0;
		for (let i = 0; i < items.length; i++) {
			totalPrice += items[i].price * quantity[i];
		}
		setTotal(totalPrice);
	};

	return (
		<div className="items">
			<form>
				<h2>Items</h2>
				<p>
					View all your selected products. Add them to the cart and
					view wish list
				</p>

				{items.map((item, index) => (
					<div className="product-div" key={index}>
						<div className="image-div">
							<img src={item.image} alt="" />
							<br />
							<button
								className="remove"
								onClick={() => removeItem(index)}
							>
								<img
									src="../../assets/images/deleteBin.svg"
									alt=""
								/>{" "}
								REMOVE
							</button>
						</div>

						<div className="info">
							<div>Product Name : {item.productName}</div>
							<div>Product Description : {item.productDescription}</div>
							{/* <div>product image : {item.productQrCodeUrl}</div> */}
						</div>

						<div className="price-increment-section">
							<div className="price">product Price : {item.productPrice}</div>

							<div className="increment-section">
								<button
									className="increment-decrement-button"
									onClick={() => decrement(index)}
								>
									-
								</button>
								{quantity[index]}
								<button
									className="increment-decrement-button"
									onClick={() => increment(index)}
								>
									+
								</button>
							</div>
						</div>
					</div>
				))}

				<div className="total-div">
					<p>Total amount</p>
					<p className="total-amount">N {total.toFixed(2)}</p>
				</div>
				<button
					type="submit"
					onClick={() => navigate("/add-card")}
					className="add-cards"
				>
					VIEW WISH LIST
				</button>
				<button
					type="submit"
					onClick={() => navigate("/add-card")}
					className="checkout"
				>
					CHECK OUT
				</button>
			</form>
		</div>
	);
};

export default Cart;
