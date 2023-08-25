import React, {useState} from "react";
import "../Styles/AddProduct.css";
import {  toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
function RegisterStor() {
    const [imageFile, setimageFile] = useState();
    const navigate =useNavigate();
    const data=useSelector((state)=>{
      return state.users;
     })
     
    const [storeData, setstoreData] = useState({
      Store_name: "",
      Owner_name: "",
      Email: data.Email,
      image: null,
    });
    

    const handleChange = (event) => {
      const { name, value } = event.target;
      setstoreData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    };
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file from the input
    setimageFile(file); // Save the selected image to state
    setstoreData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
     const formData = new FormData();
     formData.append("Store_name", storeData.Store_name);
     formData.append("Owner_name", storeData.Owner_name);
     formData.append("Email", storeData.Email);
     formData.append("image", imageFile);
     const formDataObject = {};
     formData.forEach((value, key) => {
       formDataObject[key] = value;
     });
   
     console.log("formData:", formDataObject); // Log the formData object
   
     console.log("storeData:", storeData); // Log the storeData object
   
    try {
      const response = await axios.post(
        "http://localhost:5000/api/routes/registerStore",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("done");
      console.log(response.data);
      
      navigate("/registerMassege")

    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <h1>Welcom to Easy-Buy</h1>
      <div className="Main-Con">
        <center>
          <h2>Register Your Store</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label>Store Name:</label>
              <input
                type="text"
                name="Store_name"
                value={storeData.Store_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Owner Name:</label>
              <input
              type="text"
                name="Owner_name"
                value={storeData.Owner_Name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Store Image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </div>
            <button type="submit">Register Store</button>
          </form>
        </center>
      </div>
    </>
  );
}

export default RegisterStor;
