import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dulieu : this.props.EditDuLieu,
      ClickSelect : true,
      id: this.props.EditDuLieu.id,
      User:this.props.EditDuLieu.name,
      dt:this.props.EditDuLieu.tel,
      Permission:this.props.EditDuLieu.Permission,

    }
  }
  SaveData =   (event)=>{
       const name = event.target.name;
       const value = event.target.value;

       this.setState({
         [name]: value
       })
      
  }
 
  Test = ()=>{
    this.setState({
      ClickSelect: !this.state.ClickSelect
    })
  }


 
    render() {
      console.log(this.props.EditDuLieu)
        return (
          
                  <div className="col-12">
                <div>
                    <div className="card text-white bg-dark  border-primary    mb-3 mt-2 ">
                    <form method= "post">
                  <div className="card-header text-center  ">Sửa Thông tin USER</div>
                       <div className="card-body text-primay">
              <div className="form-group">
                           <label htmlFor="User">Thêm mới nôi dung</label>
                           <input defaultValue={this.state.User} type="text" name="User" id="User" placeholder="Tên User" className="form-control" onChange = {(event)=>this.SaveData(event)}     required/>    
                         </div>
                         <div className="form-group">
                           <label htmlFor='dt  '>Điện thoại</label>
                           <input defaultValue={this.state.dt} type="text" name="dt" id='dt' placeholder="Số Điện Thoại" className="form-control"   onChange = {(event)=>this.SaveData(event)}    required />    
                         </div>
                        <div className="form-group">
                        <select  defaultValue={this.state.Permission}  className="custom-select" name="Permission"   onChange = {(event)=>this.SaveData(event)} required>
      <option value="Admin">Admin</option>
                             <option  value="Moderator">Moderator </option>
                             <option  value="Normal ">Normal</option>
                           </select>
                           <div className="invalid-feedback">Example invalid custom select feedback</div>
                         </div>
                         <input type="reset" className="btn btn-warning text-white btn-block" onClick = {(id,User,dt,Permission)=>this.props.CloseEdit(this.state.id,this.state.User,this.state.dt,this.state.Permission)} value= "Lưu" />
                       </div>
                       </form>
                    </div>
                </div>
              </div>
           
        );
    }
}

export default EditUser;