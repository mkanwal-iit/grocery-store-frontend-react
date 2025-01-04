export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Sale Price: <input name="sale_price" type="text" />
        </div>
        <div>
          On Sale: <input name="on_sale" type="checkbox" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
