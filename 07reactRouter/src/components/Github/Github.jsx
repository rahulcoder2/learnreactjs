import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

// 1st way to show data 

{/* 
  const [data, setData] = useState([]);
  useEffect(() => {
    return () => {
      fetch("https://api.github.com/users/rahulcoder2")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
  }, []);
*/}


// 2way showing data

const data = useLoaderData()

  return (
    <>
      <div className="flex flex-col-reverse lg:justify-evenly gap-2 p-4 bg-slate-500 items-center lg:flex-row-reverse ">
        <h1 className="text-3xl font-bold text-white">
            Rahul Chaudhary follower: {data.followers}
        </h1>
        <img
          src={data.avatar_url}
          alt="github profile"
          width={350}
          height={350}
          className="rounded-full shadow-2xl"
        />
      </div>
    </>
  );
};

export default Github;


// optimized way to show and 2nd way to show data 

export const gitUserInfo = async ()=>{
    const res = await
     fetch('https://api.github.com/users/rahulcoder2')

     return res.json()
}