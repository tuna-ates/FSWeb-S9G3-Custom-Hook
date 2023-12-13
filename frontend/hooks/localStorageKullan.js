/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { useState } from "react";

 
 const useLocalStorage=(key,initialValue=false)=>{
    const storageValue=JSON.parse(localStorage.getItem(key));
    const value=storageValue != null?storageValue:initialValue
    const [theme,setTheme]=useState(value);

    const setterTheme=(value)=>{
      localStorage.setItem(key,JSON.stringify(value));
         setTheme(value);
         
    }
    return [theme,setterTheme]

 }
 export default useLocalStorage;