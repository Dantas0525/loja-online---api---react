import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
