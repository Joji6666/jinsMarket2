import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(`${API_URL}/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.error("에러 : ", error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보 불러오는중...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contetns-box">
        <div id="name">{product.name}</div>
        <div id="createdAT">{product.creaatedAT}</div>
        <div id="price">{product.price}원</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
