import React, { useState } from 'react'

export default function Form() {
    // const [name,setName]=useState<string>("")>
    const handleClick=()=>{
        console.log("đã gọi vào hàm");
        
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("giá trị nhập vào là",e.target.value);
        // setName(e.target.value)
        
    }
  return (
    <div>Form
        {/* 
            Các kĩ thuật xử lí trong form
            Có 2 kĩ thuật xử lý chính
            1.controller
            + lấy dữ liệu người dùng nhập vào ô input
            + lấy dữ liệu khi người dùng nhập vào ô textarea
            +chọn select option
            - ở trong function com
        */}
        <label htmlFor="">tên</label>
        <input
            onChange={handleChange} 
            type="text" />
            {/* <p>tên người dùng nhập : {name} </p> */}
            <label htmlFor="">email</label>
            <input

                type="text" />
            <p>email người dùng nhâp : </p>
            <button onClick={handleClick}>login</button>
    </div>
  )
}
