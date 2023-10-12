import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { useState } from "react";
import axios from "axios";


const UpdateProduct = () => {
	const navigate = useNavigate();
	const [error, setError] = useState();
	const [product, setProduct] = useState({
		productName: "",
		productPrice: 0.0,
		productDescription: "",
		productImageUrl: "",
		supermarketCode: "Ibiza",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => {
			return { ...prev, [name]: value };
		});
		// console.log(user);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		product.productImageUrl = sessionStorage.getItem("recentlyUploadedImage")

		try {
			const response = await axios.post(
				"http://localhost:1961/api/v1/productController/addNewProduct",
				product
			);
			alert(response.data.data);
			console.log(response.data.data);

			navigate("/addProduct");
		} catch (error) {
			setError(error.response.data.data);
			console.log(error.response.data.data);
		}
	};
	
	return (
		<div className="wrapper">
		<div className="product">
			<form onSubmit={handleSubmit}>
				<h2>Product</h2>
				<input
					name="productName"
					onChange={handleChange}
					type="text"
					placeholder="Product Name"
				/>
				<p className="error">{error}</p>
				<input
					name="productPrice"
					onChange={handleChange}
					type="text"
					placeholder="Product Price"
				/>
				<textarea
					name="productDescription"
					onChange={handleChange}
					type="text"
					placeholder="product Description"
					className="productDescription"
				/>
					<img className="picture"
						src={sessionStorage.getItem("recentlyUploadedImage")} // Replace with the URL of your image
						alt="Description of the image"

						width="300" 
						height="200"
					/>
			
				<button
					type="submit"
					className="addProduct"
					// onClick={() => navigate("dashboard")}
				>
					Add Product
				</button>
			</form>
		</div>
		</div>
	);
};

export default UpdateProduct;
