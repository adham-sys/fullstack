import { error } from "console";

 async function Products(){
  const product = await fetch('https://fakestoreapi.com/products')
  .then(res=>{
    if(!res.ok){
         throw new Error('resources not fetch');
    }
    return res.json();
  })
  .then(data=>{
    return data;
  })
  .catch(error=>console.error(error)); 
 return(
    
    <div className="relative z-22 bottom-5 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-amber-50  text-justify  ">
     {product.map(items=>(
        <div className="overflow-hidden border-2 rounded-4xl p-3 border-amber-50  hover:border-amber-400 transition-colors duration-300  bg-black w-full bg-linear-to-br  hover:to-blue-800  " key={items.id} >
         <div>
          <img src={items.image} alt="image not found" />
         </div>
         <div className="m-2 space-y-3">

            <h3>{items.title}</h3>
            <p className="price">${items.price}</p>
            <p className="category">{items.category}</p>
            <p className="description">{`${items.description.slice(0,500)}...`}</p>
         </div>
        </div>
       )
      )
     }
    </div>  
 );
}
export default Products;