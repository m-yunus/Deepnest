import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../../Context/Context';

const ProductInnercategory = () => {
    const {innercategory}=useParams()
    const {  products } = useContext(CategoryContext);
   
    console.log(innercategory);
    const Filtered =products.filter((items)=>
    items.subCategory===innercategory
)
console.log(Filtered);
  return (
    <table className="product-table">
        <thead>
          <tr>
            {Filtered.map((product, index) => (
              <th key={index}>{product.productName}</th>
            ))}
          </tr>
        </thead>
      </table>
  )
}

export default ProductInnercategory