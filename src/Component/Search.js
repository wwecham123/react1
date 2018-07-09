import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
        constructor(props) {
          super(props);
          this.state= {
            clicksubmit : false,
            val : ""
          }
        }
        
  
    isChange = (event)=>{
      const value = event.target.value;
      this.setState({
        val : value
      })
    }
    submitForm = (event)=>{
      this.setState({
        clicksubmit :  true
      })
      event.preventDefault();
    }
     HienthiNut = ()=>{
       if(this.props.hienthiForm === true){ 
         return(  <div className="btn btn-block btn-outline-dark" onClick={()=>this.props.thaydoiTrangthai()}  >Đóng lại</div> )
         
       }
       else return (   <div className="btn btn-block btn-outline-primary"  onClick={()=>this.props.thaydoiTrangthai()}  >Thêm mới</div>   
      )
     }
     
    IsShowEditForm= ()=>{
      if(this.props.EditUserStatus === true){
        return <EditUser CloseEdit = {(id,User, dt, Permission)=>this.props.CloseEdit(id,User, dt, Permission)} EditDuLieu = {this.props.EditDuLieu}/>
      }
    }
       
    render() {
    
        return (
            <div className="col-12">
            <div className="row">
          {this.IsShowEditForm()}
            </div>
        <div className="form-group  ">
          <div className="btn-group">
            <label htmlFor="Search"></label>
            
            <input type="text" name="Search" id="Search" className="form-control" placeholder="Nhập từ khóa" aria-describedby="helpId" onChange={(event)=>this.isChange(event)}/>
            <button type="submit" className="btn btn-info" onClick = {(dl) => this.props.nhandulieu(this.state.val)}>Tìm kiếm</button> 
          </div>
          <div>
           {this.HienthiNut()}
            </div>
        </div>
      </div>
        );
    }
}

export default Search;