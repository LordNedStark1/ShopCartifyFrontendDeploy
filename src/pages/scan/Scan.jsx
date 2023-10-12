import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import "./scan.css";


import { useNavigate } from "react-router-dom";



const Scan = () => {
	const navigate = useNavigate();
	const [error, setError] = useState();
	const [qrCodeValue, setQrCodeValue] = useState();
	const [scanResult, setScanResult] = useState(null);
	useEffect(() => {
		const scanner = new Html5QrcodeScanner("reader", {
			qrbox: {
				width: 307,
				height: 301,
			},
			fps: 10,
		});
		scanner.render(success, error);
		function success(result) {
			scanner.clear();
			setScanResult(result);
		}
		function error(err) {
			console.log(err);
		}
	}, []);
	const handleChange = (e) => {
		const {value } = e.target;
		setQrCodeValue(() => {
			return  value ;
		});
	};

	function navMe() {
		// let myResult = scanResult;
		let myResult = qrCodeValue;

		sessionStorage.setItem("result", JSON.stringify(myResult));
		navigate("/backToScan");
	}
	return (
		<div className="scan-div">
			<p className="scan-title">Scan Products</p>
			<div>
				{scanResult ? (
					<div>
						Success:
						{navMe()}
					</div>
				) : (
					<div id="reader" className="qr-code-scanner"></div>
				)}
			</div>
				<input
						name="qrCodeValue"
						onChange={handleChange}
						type="text"
						placeholder="qrCode Value"
					/>
			<button className="qrcodeVakueButton" 
			onClick={navMe}
			>
				check qrCode
			</button>
			<button className="view-cart" onClick={() => navigate("../cart")}>
				View cart
			</button>
		</div>
	);
};

export default Scan;
