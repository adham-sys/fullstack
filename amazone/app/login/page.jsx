"use client"
import { signIn } from "next-auth/react";


function login(){
    return(
    

        <div className="text-center rounded-3xl relative bottom-10 w-120 m-auto ">
            <div className="w-40 m-auto">
               <img src="amazon5.png" alt="" />
            </div>
            <div className="border-1 border-gray-400 p-10 -my-10">
              <form action="">
                <h1 className="font-semibold text-2xl pl-2">Sign-In or create an account</h1>
                <h5 className="pr-6 font-semibold">Enter mobile number or email </h5>
                <input className="border-1 rounded-2xl w-60 h-8 focus:outline-offset-2 focus:outline-cyan-200" type="email" required /><br/>
                <button onClick={()=>signIn()} className="bg-amber-300 rounded-2xl mt-2 p-2 w-60">Continue</button><br/>
                <small> By continuing you agree to Amazone's <a className="text-blue-500 " href=""><br/>&nbsp;Conditions of use&nbsp;</a>and <a className="text-blue-500" href="">privacy Notice</a></small><br/>
                <a className="text-blue-500 pr-35" href="">Need help?</a>
              </form>
            </div>
        </div>
    
    );
}
export default login;