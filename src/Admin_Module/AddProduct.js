import React, { useState } from "react";
import "../Styles/AddProduct.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function AddProduct() {
  const [imageFile,setimageFile]=useState()
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    stock: 0,
    actualPrice: 0,
    discountPrice: 0,
    discountPercentage: 0,
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file from the input
  setimageFile(file); // Save the selected image to state
    setProductData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("stock", productData.stock);
    formData.append("actualPrice", productData.actualPrice);
    formData.append("discountPrice", productData.discountPrice);
    formData.append("discountPercentage", productData.discountPercentage);
    
    // Append the image file from state
    formData.append("image", imageFile);
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/routes/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("done");
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
    

  return (
    <div className="Main-Con">
      <center>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Stock:</label>
            <select
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              required
              className="stock-select"
            >
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          <div>
            <label>Actual Price:</label>
            <input
              type="number"
              name="actualPrice"
              value={productData.actualPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Discount Price:</label>
            <input
              type="number"
              name="discountPrice"
              value={productData.discountPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Discount Percentage:</label>
            <input
              type="number"
              name="discountPercentage"
              value={productData.discountPercentage}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </center>
    </div>
  );
}

export default AddProduct;
