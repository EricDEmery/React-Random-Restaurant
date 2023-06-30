import React from 'react'
import Dinner from './Dinner'
import Breakfast from './Breakfast'
import Appetizer from './Appetizer'
import Lunch from './Lunch'

export default function Menu(props) {
  return (
    <>
    <Appetizer menuItems = {props.menuItems}/>
    <Breakfast menuItems = {props.menuItems}/>
    <Lunch menuItems = {props.menuItems}/>
    <Dinner menuItems = {props.menuItems}/>
    
    </>
  )
}
