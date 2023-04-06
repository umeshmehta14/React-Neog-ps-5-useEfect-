import React, {useState, useEffect} from 'react'

//2. Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

// a. Add a button, on click of which it displays only the items with more than 20 as quantity.

// output-2-1

// output-2-2

// fakeFetch has been provided:

//3. In the above question after you have listed all the items, add a button which says “Filter by Price”. On click of the button, display only the items with price less than 100.

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              { name: 'Color Pencils', price: 50, quantity: 40 },
              { name: 'Sketchpens', price: 110, quantity: 20 },
              { name: 'Erasor', price: 20, quantity: 20 },
              { name: 'Sharpner', price: 22, quantity: 30 },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        })
      }
    }, 2000)
  })
}
const Question2_3 = () => {
    const [products, setProducts] = useState([]);
    const [productsCopy, setProductsCopy] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/products");
            if(response.status === 200){
                setProducts(response.data.products);
                setProductsCopy(response.data.products);
                setLoading(false);
            }

        } catch (err) {
            console.log(err)
            
        }
    }
    useEffect(()=> {
        getData();
    },[])


    const FilterProducts = (category)=>{
        if(toggle)
        {
            setProducts(productsCopy);
            setToggle(false);
        }
        else{

            const filteredProducts = products.filter(({price,quantity})=> category === "price"? price< 100:quantity>20 )
            setProducts(filteredProducts);
          setToggle(true);
        }
    }
  return (

    <div>
        <p>{loading && "...Loading"}</p>
        <button onClick={()=>FilterProducts("Quantity")}>items with more than 20</button>
        <button onClick={()=>FilterProducts("price")}>Filter by Price</button>
        <ul>

      {
          products.map(({name, price, quantity}) =>{
              return <li>
                {name}-Rs.
                {price}-Quantity
                {quantity}
              </li>
            })
        }
        </ul>
    </div>
  )
}

export default Question2_3
