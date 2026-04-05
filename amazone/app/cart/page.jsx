import Link from "next/link";
async function Cart(){
    const pro = await fetch('https://fakestoreapiserver.reactbd.org/api/products')
    .then(res=>
    {

        if(!res.ok){
            throw new Error('resources not fetch');
        }
        return res.json();
    }
    )
    .then(data=>{
        return data;
    })
    .catch(error=>console.error(error));
    console.log(pro);
    
    return(
        <div className="bg-gray-100  grid grid-cols-1 lg:grid-cols-2 p-2 pb-10  ">
            <div className="text-center bg-white space-x-1 w-150 h-50 m-auto lg:mt-8 lg: p-10 ">
               <h1 className="font-semibold text-2xl pl-2">your amazone cart is empty</h1> 
               <a className="text-blue-600 underline pr-40" href="">shop today's deals</a><br/>
               <Link href="/login">
                <button className="bg-amber-300 cursor-pointer border-1 rounded-2xl m-4 p-1 pl-3">sign in to your account&emsp;</button>
                <button className=" border-1 cursor-pointer rounded-2xl p-1 pl-2">sign up now</button><br/>
               </Link>
               <small className="text-sm relative top-18">The price and availability of items at amazon.eg are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
                Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
               </small>
            </div>
            
            
            <div className=" w-100 overflow-scroll my-element h-150 p-1 rounded-3xl bg-white mt-40 lg:mt-0 lg:relative left-15 m-auto  ">
                <h1 className="font-semibold p-5">Customer who Bought items in Your Recent History Also Bought</h1>
                  {pro.data.map(val=>(
                  <div id="snimate" className="grid grid-cols-2  animation hover:animation-animation-0 " key={val.id} >
                    <div>
                     <img src={val.image} alt="not found" />
                    </div>
                    <div className="mb-3 pl-4 ">
                     <h3>{val.title}</h3>
                     <p className="font-semibold">${val.price}</p>
                     <p className="category">{val.category}</p>
                     <p className="description">{`${val.description.slice(0,100)}...`}</p>
                     <button className="bg-amber-300 border-1 rounded-2xl m-2 p-1 pl-3 pr-3 cursor-pointer">Add to Cart</button>
                    </div>
                  </div>   
                 )
                )}        
            </div>
        </div>
    );
}
export default Cart;