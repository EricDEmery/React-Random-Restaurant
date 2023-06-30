import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
const api = "https://www.jsonkeeper.com/b/MDXW";

export default function App() {
  const [menuItems, setMenuItems] = useState([]); //Getter and Setter
  useEffect(()=>{
  async function getData() {
    const response = axios.get(api); //calls API data
    setMenuItems(response);
    console.log(menuItems);
  }
  getData();

  }, []) //"[]" only lets the page render once
  return <h1>header hoe</h1>;
}
