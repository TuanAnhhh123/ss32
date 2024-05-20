import React, { Component } from 'react'
interface Props{}
interface State{
    count:number

}
export default class Classcomponent extends Component <Props,State> {
    interval:any;
    
    constructor(props:Props){
        super(props)
        // khởi tạo state
        this.state={
            count:0,
        }
    }
    componentDidMount(): void {
        this.interval = setInterval(()=>{
            console.log("hàm setInterval đc gọi");
            
        },2000)
    }
    handleClick=()=>{
        clearInterval(this.interval);
        
    
    }
    componentWillUnmount(): void {
        clearInterval(this.interval);
    }
    
  render() {
    return (
      <div>Classcomponent
        <button onClick={this.handleClick}>Dừng Interval</button>
      </div>
    )
  }
}