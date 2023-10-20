import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BackToScan.css";
import BASE_URL from "../../url/Url";
// import {  useNavigate } from "react-router-dom";

// import './BackToScan.css'

let products = "products";


const BackToScan = () => {
	const navigation = useNavigate();
	const [error, setError] = useState();
	const [productDetails, setProductDetails] = useState([]);

	const findProduct = useCallback(async () => {
		let scanResult = sessionStorage.getItem("result");
        
		try {
			const response = await axios.get(
				BASE_URL+"/api/v1/productController/findProductByToken/" +
					scanResult
                    );
           
			console.log(response);
			setProductDetails(response.data.data);
		} catch (error) {
            console.log("error");
			
			setError(error.response.data.data);
			console.log(error.response.data);
		}
	}, []);

	const addToCart = () => {
		let productsArray = sessionStorage.getItem(products);

		if (productsArray === null) {
			productsArray = [];
		} else {
			productsArray = JSON.parse(productsArray);
		}
		productsArray.push(productDetails);
		sessionStorage.setItem(products, JSON.stringify(productsArray));

		console.log(JSON.parse(sessionStorage.getItem(products)));

		navigation("/scan");
	};

	useEffect(() => {
		findProduct();
	}, [findProduct]);

	return (
		<div className="total-div">
			<div className="productDisplayDiv">
				<p>Scan Products</p>

				<div className="right-part">
					<div className="productPrice">
						<h3>Product name : {productDetails.productName}</h3>
						<p className="p">Product description : {productDetails.productDescription}</p>
						<p> Product Price : {productDetails.productPrice}</p>{" "}
					</div>
					{/* <div className="productPrice"><h3>{product[1].productName}</h3> <p>{product[1].productName}</p> </div> */}
				</div>
				<button className="addToCart" onClick={() => addToCart()}>
					AddToCart
				</button>
			</div>
		</div>
	);
};

export default BackToScan;
