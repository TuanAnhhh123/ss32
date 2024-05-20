import React from 'react'
import Classcomponent from './Components/Classcomponent'
import Form from './Components/Form'
import B1 from './Components/B1'
import B2 from './Components/B2'
import B3 from './Components/B3'
import B4 from './Components/B4'
import B5 from './Components/B5'
import B6 from './Components/B6'
export default function App() {
  // setTimeout(()=>{
  //   console.log("hàm setTimeout đc gọi");
    
  // },5000)
  // let interval = setInterval(()=>{
  //   console.log("hàm setInterval được gọi");
    
  // },1000)
  // const handleClick=()=>{
  //   clearInterval(interval)
  // }
  /**
   * setInterval chạy nhiều lần khi muốn dùng setInterval thì phải clearInterval
   */
  return (
    <div>App
      <Classcomponent></Classcomponent>
      <Form></Form>
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <B6></B6>
    </div>
  )}