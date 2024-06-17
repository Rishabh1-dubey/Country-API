import React, { useRef, useState } from "react";
import Shimmer from "./Shimmer";

const LoginIN = () => {
  const [isSign, setSign] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const handleClick = () => {
    setSign(!isSign);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handlepassword = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const error = checkValidData(email.current.value, password.current.value);
    seterrorMessage(error);
  };

  const checkValidData = (email, password) => {
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      );

    if (!isEmail) return "please enter your name";
    if (!isPassword) return "please enter your password";
    return null;
  };

  return (
    <div className="border border-red-500 w-[450] h-[390] m-auto  bg-black">
      
        <form onSubmit={(e) => e.preventDefault()} className=" pt-16 p-10 ">
          <h1
            className="text-white pb-3 text-2xl
 "
          >
            {isSign ? "sign IN" : "signUp"}
          </h1>
          <input
            type="text"
            ref={email}
            placeholder="enter your email"
            className="p-2 m-2 bg-zinc-200 text-black w-full"
          />{" "}
          {!isSign && (
            <input
              type="text"
              placeholder="enter your name"
              className="p-2 m-2 bg-zinc-200 text-black w-full"
            />
          )}
          <input
            type="password"
            placeholder="enter your password"
            ref={password}
            className="p-2 m-2 bg-zinc-200 text-black w-full"
          />
          <p className=" text-red-800">{errorMessage}</p>
          <button
            className="p-2 bg-red-400 w-full border rounded-lg "
            onClick={handlepassword}
          >
            {isSign ? "sign IN" : "signUp"}
          </button>
          <p className="text-white pt-4" onClick={handleClick}>
            {isSign ? "are you new user" : "click on sign in"}
          </p>
        </form>
      
    </div>
  );
};

export default LoginIN;
