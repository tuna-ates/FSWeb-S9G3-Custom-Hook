/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import usegeceModuAc from "./hooks/geceModuAc";
import useLocalStorage from "./hooks/localStorageKullan";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  //const [geceModu, setGeceModu] = useState(false);
  const [geceModu, setGeceModu] = usegeceModuAc(false);

  const [theme,setTheme]=useLocalStorage(false);
  const [deneme,setDeneme]=useState(false);
  

  useEffect(()=>{
   console.log("deneme",geceModu);
  },[geceModu]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={!geceModu?"App":"dark-mode App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
