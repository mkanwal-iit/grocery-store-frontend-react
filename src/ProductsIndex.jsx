export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All products ({products.length} total)</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          {product.sale_price && <p>Sale Price: ${product.sale_price}</p>}
          <p>On Sale: {product.on_sale ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}
