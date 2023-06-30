import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Menu from "./Menu";
const api = "https://www.jsonkeeper.com/b/MDXW";

export default function App() {
  const [menuItems, setMenuItems] = useState([]); //Getter and Setter
  useEffect(()=>{
  async function getData() {
    const response = await axios.get(api); //calls API data
    setMenuItems(response.data);
  
  }
  getData();
 
  }, []) //"[]" only lets the page render once
  
  return (
    <Menu menuItems = {menuItems}/>
  );
}
