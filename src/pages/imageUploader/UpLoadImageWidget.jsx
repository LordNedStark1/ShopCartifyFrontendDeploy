// import {useEffect, useRef} from "react";
// import { get_CLOUDINARY_API_NAME, get_CLOUDINARY_UPLOAD_PRESET } from "../../../securedFiles/.CloudinarySecrets";
// // require('dotenv').config();


// function UploadWidget() {
    
//     const cloudinaryRef = useRef()
//     const widgetRef = useRef()
//     useEffect(()=>{
//         cloudinaryRef.current = window.cloudinary
//         console.log(cloudinaryRef.current)
//         widgetRef.current = cloudinaryRef.current.createUploadWidget({
            
//             cloudName:  get_CLOUDINARY_API_NAME(),
//             uploadPreset: get_CLOUDINARY_UPLOAD_PRESET()
//             // uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET
//         },  function (error, result) {
//             if (!error && result && result.event === 'success') {

//                 sessionStorage.setItem("recentlyUploadedImage",result.info.secure_url )
               
//                 return result.info.secure_url;
//             }
//             else alert(error)
//         })
//     }, [])

//     return (
//         <button onClick={() =>widgetRef.current.open()}>
//             Upload Product Image 
//         </button>
//     )
// }
// export default UploadWidget