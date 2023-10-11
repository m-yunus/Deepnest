import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CategoryContext } from '../../../Context/Context';

const ProductCategory = () => {
    const {category}=useParams()
    const { categories, products } = useContext(CategoryContext);
    const Filtered =products.filter((items)=>
        items.category===category
    )
    const navigate=useNavigate()
    console.log(Filtered);

    const handleNavigate=(items)=>{
        console.log(items);
navigate(`/products/${items?.category}/${items?.subCategory}`)
    }
  return (
   <>
   {Filtered.map((items)=>(
    <div>
        <div>
            <h4 onClick={()=>handleNavigate(items)}>{items?.subCategory}({products.filter(filteritems=>filteritems?.subCategory===items?.subCategory).length})</h4>
        </div>
        <div>

       
      
       
        <p>{items.productName}</p>
        </div>
    </div>
   ))}
   </>
  )
}

export default ProductCategory