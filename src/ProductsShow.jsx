export function ProductsShow({ product, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.currentTarget);
    onUpdate(product, params, () => event.currentTarget.reset());
  };
  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Sale Price: ${product.sale_price}</p>
      <p>On Sale: {product.on_sale ? "Yes" : "No"}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={product.price} name="price" type="text" />
        </div>
        <div>
          Sale Price: <input defaultValue={product.sale_price} name="sale_price" type="text" />
        </div>
        <div>
          On Sale: <input defaultChecked={product.on_sale} name="on_sale" type="checkbox" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(product)}>Delete</button>
    </div>
  );
}
