import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Info from "./Info";
import Location from "./Location";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Special from "./Special";
const api = "https://www.jsonkeeper.com/b/MDXW";

export default function App() {
  const [menuItems, setMenuItems] = useState([]); //Getter and Setter
  const [page, setPage] = useState("Home");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(api); //calls API data
      setMenuItems(response.data);
    }
    getData();
  }, []); //"[]" stops useEffect from making an infinite loop
  console.log(page);
  if (page === "Home") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Hero />
        <Special />
      </>
    );
  } else if (page === "Menu") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Menu menuItems={menuItems} />
      </>
    );
  } else {
    return (
      <>
        <Navbar setPage={setPage} />
        <Info />
        <Location />
      </>
    );
  }
}
