import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../url/Url";
import { ToastContainer, toast } from "react-toastify";
import UploadWidget from "../imageUploader/UpLoadImageWidget";
// import UploadWidget from "../imageUploader/UpLoadImageWidget";

const AddProduct = () => {
	const navigate = useNavigate();
	const [error, setError] = useState();
	const [btnTitle, setBtnTitle] = useState("ADD PRODUCT");
	const [product, setProduct] = useState({
		productName: "",
		productPrice: 0.0,
		productDescription: "",
		productImageUrl: "",
		supermarketCode: "",
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
		setBtnTitle("Processing ...")

		product.productImageUrl = sessionStorage.getItem("recentlyUploadedImage")

		try {
			const response = await axios.post(
				BASE_URL +"/api/v1/productController/addNewProduct",
				product
			);
			setBtnTitle("Adding New Product... ")
			toast.success("Account created successfully");
			console.log(response.data.data);

			setBtnTitle("SUCCESS! ")
			navigate("/addProduct");
		} catch (error) {
			setBtnTitle("FAILED!!!")
			setBtnTitle("Add Product")
			
			setError(error.response.data.data);
			console.log(error.response.data.data);
			
			
		}
	
	}
	return (
		<div className="wrapper">
			<ToastContainer />
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
				/>	<input
				name="supermarketCode"
				onChange={handleChange}
				type="text"
				placeholder="supermarketCode"
			/>
					<img className="picture"
						src={sessionStorage.getItem("recentlyUploadedImage")} // Replace with the URL of your image
						alt="Description of the image"

						width="300" 
						height="200"
					/>
				{/* <div className="upload"><UploadWidget/></div> */}
				<button
					type="submit"
					className="addProduct"
					// onClick={() => navigate("dashboard")}
				>
					{btnTitle}
				</button>
			</form>
		</div>
		</div>
	);
};

export default AddProduct;
