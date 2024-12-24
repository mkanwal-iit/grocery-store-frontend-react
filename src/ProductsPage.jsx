import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  console.log("handleIndex");
  const handleIndex = () => {
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/products.json", params).then((response) => {
      console.log(response.data);
      setProducts([...products, response.data]);
      successCallback();
    });
  };
  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
  const handleUpdate = (product, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/products/${product.id}.json`, params).then((response) => {
      console.log(response.data);
      const newProducts = products.map((p) => {
        if (p.id === product.id) {
          return response.data;
        } else {
          return p;
        }
      });
      // Assuming there's a state setter function called setProducts to update the products array in the state
      setProducts(newProducts);
      successCallback();
      setIsPhotosShowVisible(false);
    });
  };
  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios.delete(`/products/${product.id}.json`).then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      setIsProductsShowVisible(false);
    });
  };
  useEffect(handleIndex, []);
  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
