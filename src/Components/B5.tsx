import React, { useState } from 'react';

interface Product {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    productId: '',
    productName: '',
    price: 0,
    quantity: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(product);
  };

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Mã sản phẩm:</label>
          <input
            type="text"
            id="productId"
            name="productId"
            value={product.productId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="productName">Tên sản phẩm:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Giá:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Số lượng:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default ProductForm;
