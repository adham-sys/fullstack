import Link from "next/link";
function Footer(){
 return(
 <div>   
  <div className="text-center border-1 border-zinc-400 mt-4 ">
    <h1 className="font-medium text-3xl">see personalized recommendations</h1>
    <Link href="/login">
     <button className="border-amber-300 border-4 rounded-2xl cursor-pointer w-30 bg-amber-300 p-1 mt-3">sign in</button>
    </Link>
   <div className="" >
    <small>&nbsp;New customer?&nbsp;</small>
    <a className="text-blue-600 underline" href="">start here</a>
   </div>
  </div>
  <div className="bg-[rgb(35,47,62)] text-amber-50 text-center">
    <div className="h-15 bg-[rgba(82,98,118,0.42)] bg-linear-to-tr hover:from-gray-600 ">
     <a className="" href="#"><button className="cursor-pointer w-full h-full">Back to top</button></a>
    </div>
    <ul>
     <div className="grid grid-cols-4 p-5 items-center ">
       <div>
        <li className="font-bold">Get to Know Us</li>
        <li>About Amazone</li>
        <li>Careers</li>
        <li>Amazone Sinence</li>
       </div>
       <div>
        <li className="font-bold">Shop with Us</li>
        <li>Your Account</li>
        <li>Your Order</li>
        <li>Your Address</li>
        <li>Your Lists</li>
       </div>
       <div>
        <li className="font-bold">Make Money with Us</li>
        <li>protect and build your brand</li>
        <li>Advertise Your Products</li>
        <li>Sell on Amazon</li>
        <li>Fullfillment by Amazone</li>
        <li>Supply to Amazone</li>
       </div>
       <div>
        <li className="font-bold">Let Us Help You</li>
        <li>Help</li>
        <li>Shipping & Delivery</li>
        <li>Returns & Replacements</li>
        <li>Recall and product Safety Alerts</li>
        <li>Amazon App Download</li> 
       </div>
      </div> 
     </ul>
    <div className="w-40 p-2 m-auto ">
        <img src="amazon4.png" alt="unloaded" />
    </div>
  </div>
 </div>
 );
}
export default Footer;