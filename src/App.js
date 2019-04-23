import React, { Component } from 'react';

import './App.css';
import { Button, Modal, Row,Col,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



import axios from 'axios';

 class App  extends Component {
  
  state = {
    Userdata: [],
    loading:false,
     page:1,
      scale:1.0
  }


 componentDidMount()
{
 const api = 'https://peaceful-mesa-72076.herokuapp.com/download?id=1001&key=Provisionsvendor.pdf'; 

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU2MDU1NTE3LCJleHAiOjE1NTY2NjAzMTd9.ywxSO5ZzcF4zFAA2RSuhV9ytJr39a_oUwwjsHx9vu8AX7srzspQBsLx3LQWXxURN3cD5ScKvLPC4No0BVnwh5Q"
axios.get(api , {responseType: 'blob',  headers: {"Authorization" : `Bearer ${token}`,'Accept': 'application/pdf'} } )
.then(res => {
   const Userdata = res.data;


console.log(res.data)
const blob = new Blob([res.data],{type:"application/pdf"})
  const url = window.URL.createObjectURL(blob)
  this.setState({fileUrl: url, loading: false})

        

console.log(this.state.fileUrl)  


}).catch((error) => {
  console.log(error)
});
}


   
  render(){



   return( < >
    <h1 style={{textAlign:"center",background:"lightgrey",padding:"5px"}}>
    PDF VIEW
   
  
  </h1>
<p style={{textAlign:"center"}}>
 <object width="700" height="600"



  data={this.state.fileUrl} alt="done" aria-label="" />

  </p>

   </> ) }
}


export default App;

