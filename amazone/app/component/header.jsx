"use client";
import Link from "next/link";
import {signIn,signOut,useSession} from "next-auth/react"
function Header(){
  const {data:session}=useSession();
return(
     <div className="overflow-hidden">
          <div className=" flex items-center  flex-grow bg-amazon-darkmod">
           <div className="p-2  ">
            <a href="/">
             <img className="mt-1 " src="amazon.png" width={110} alt="not found" />
            </a>
           </div> 
           <div className="flex max-sm:hidden ">
            <input className="w-100 bg-amber-50 border-r-0 font-light items-center  md:w-150 xl:w-250" placeholder="search for products" type="text" />
            <img className="bg-amber-300 hover:bg-amber-400 rounded-r-md w-6 h-9 " src="search.png" width={20}  alt="not found" />
           </div>
          <div className="flex cursor-pointer text-amber-50 space-x-3 relative left-50 max-sm:left-15 items-center">
            <div>
                  <button onClick={signIn} ></button>     
            </div>
            <div><p>Orders</p></div>
            <Link href="/cart">
              <div className="flex items-center hover:border-1 cursor-pointer space-x-1">
                <sup className="bg-amber-400 rounded-2xl h-1 p-2 left-11 mb-6 ">0</sup>
                <img src="cart.png" alt="not found" />
                <h1 >CART</h1>
              </div>
            </Link>
          </div> 
         </div>
         <div className="bg-amazon-blue flex items-center h-10  text-amber-600 flex-grow space-x-10">
          <div className="flex items-center mb-1 min-sm:h-13">
             <img className=" cursor-pointer"  src="mymenu.png" alt="not found" />
             <a href="">ALL</a>
          </div>
          <div className="flex mb-1 hover:underline  space-x-4">
            <a className=" " href="">today's deals</a>
            <a href="">mobils phones</a>
            <a href="">electronics</a>
            <a href="">prime</a>
            <a href="">fashion</a>
            <a href="">home</a>
            <a href="">video games</a>
            <a href="">appliancse</a>
            <a href="">toys&games</a>
            <a href="">grocery</a>
            <a href="">perfumes</a>
            <a href="">your amazon</a>
            <a href="">gift cards</a>
            <a href="">sell</a>
            <a href="">help</a>

          </div>
         </div>
      </div>  
);
}
export default Header;