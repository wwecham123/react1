import React, { Component } from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataUser from './Data.json'

const uuidv4 = require('uuid/v4');
class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            hienthiForm : true,
            data : [],
            searhData:"",
            EditUserStatus: false,
            valueObject:""
          }
        }

        
        componentWillMount() {
          if(localStorage.getItem("userData") === null){
            localStorage.setItem("userData", JSON.stringify(dataUser));
          }
          else  {
              var temp = JSON.parse(localStorage.getItem("userData"));
             this.setState({
               data : temp
             })
             console.log(12)
          }
        }
        
        thaydoiTrangthai = ()=>{
          this.setState({
            hienthiForm : !this.state.hienthiForm 
          })
        }
        DeletePhanTU = (event) =>{
          var x = this.state.data
        
              x.forEach((value, key)=>{
                  if(value.id === event){
                     x.splice(key,1);
                  }
               
          })
          this.setState({
            data:x
          })
          localStorage.setItem('userData', JSON.stringify(x))
        }
        editFunc = (value)=>{ 
            this.setState({
              EditUserStatus : !this.state.EditUserStatus,
              valueObject: value
            });
          console.log(value);
        
        }
        CloseEdit =(id,User, dt, Permission) =>{
  
          this.setState({
            EditUserStatus : !this.state.EditUserStatus,
           
          });
          var x = this.state.data;
          
          x.forEach((item,key)=>{
            if(item.id === id){
               x[key].name = User;
               x[key].tel  = dt;
               x[key].Permission = Permission;
            }
           
          })
          this.setState({
            data : x
          })
        }
        getUserData = (User, tel , Permission)=>{
         
          var item = {}
          item.id = uuidv4();
          item.name = User;
          item.tel = tel;
          item.Permission = Permission;
          var items = this.state.data;
           console.log(User)
          if(item.name !== "" && item.tel !== "" && item.Permission !== ""){
            items.push(item);
          }
         
          this.setState({
            data:items
          })
        localStorage.setItem("userData",JSON.stringify(items))
        }

        nhandulieu =(dl)=>{
        
          this.setState({
            searhData : dl
          })
        }
  render() {
      var x= [];
 
        this.state.data.forEach((items)=>{
          if( items.name.indexOf(this.state.searhData) !==-1){
          x.push(items);
         
          }
         
        })
  
 
    return (

      <div className="">

       <Header/>
       
       <div className="searchForm" >
        <div className="container">
        <div className="row ">
          <Search CloseEdit={(id,User, dt, Permission)=>this.CloseEdit(id,User, dt, Permission)} EditDuLieu = {this.state.valueObject}  EditUserStatus = {this.state.EditUserStatus} nhandulieu = {(dl)=>this.nhandulieu(dl)} thaydoiTrangthai = {()=>this.thaydoiTrangthai()} hienthiForm = {this.state.hienthiForm}/>
          <TableData dataUser = {x} editFunc= {(event)=>  this.editFunc(event)} DeletePhanTU={(event)=>this.DeletePhanTU(event)}  />
       
          <AddUser getUserData={(User,tel,Permission)=>this.getUserData(User,tel,Permission)}  hienthiForm = {this.state.hienthiForm}/>
       </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
