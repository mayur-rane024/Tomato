import React, { useState } from "react";
import "./Add.css";
import {assets} from "../../assets/assets"

const Add = () => {
  const [image, setimage] = useState(false);
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt=""></img>
          </label>
          <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" name="name" placeholder="Type Here"></input>
        </div>
        <div className="add-product-description">
          <p>Product Description</p>
          <textarea
            name="desription"
            rows="6"
            placeholder="Write Content"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category">
              <option value="SALAD">SALAD</option>
              <option value="ROLLS">ROLLS</option>
              <option value="DESERTS">DESERTS</option>
              <option value="SANDWICH">SANDWICH</option>
              <option value="CAKE">CAKE</option>
              <option value="PURE VEG">PURE VEG</option>
              <option value="PASTA">PASTA</option>
              <option value="NOODLES">NOODLES</option>
            </select>
          </div>
          <div className="add-price">
            <p>Product Price</p>
            <input type="Number" name="price" placeholder="$20"></input>
          </div>
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default Add;
