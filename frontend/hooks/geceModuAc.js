/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useLocalStorage from "./localStorageKullan";

const usegeceModuAc=(initialValue)=>{
  // const storageValue=localStorage.getItem("theme")
  // const value=storageValue!=null?storageValue:initialValue;

   const [val,setVal]=useLocalStorage("theme",initialValue);

  // useEffect(()=>{
  //    localStorage.setItem("theme",val);
  // },[val])

  //  const handlerChange=(data)=>{
   
  //    //const {type,value,checked}=event.target
  //    console.log("data",data);
  //    setVal(data)
  //    setTheme(data);
  //  }
   
   return[val,setVal]
}
export default usegeceModuAc;