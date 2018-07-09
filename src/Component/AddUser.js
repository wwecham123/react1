import React, { Component } from 'react';

class AddUser extends Component {
   constructor(props) {
       super(props);
       this.state = {
        id:"",
        User:"",
        dt:"",
        Permisson   :""
       }
   }
   Test = (event)=>{ 
    var ten = event.target.name;
    var giatri = event.target.value;
    

    this.setState({
        [ten]: giatri
    })
  
}
Check = ()=>{
    if(this.state.User === "" || this.state.dt === "" || this.state.Permisson === ""){
        this.setState({
            id:"",
            User:"",
            dt:"",
            Permisson   :""
        })
      
      }
      else {
        this.props.getUserData(this.state.User, this.state.dt , this.state.Permisson);
        this.setState({
            id:"",
            User:"",
            dt:"",
            Permisson   :""
        })
      }
  
 
}
    render() {
                
      
  
        if(this.props.hienthiForm === true){
            return (
                <div>
                    <div className="col">
                <div>
                 
              
                    <div className="card border-primary mb-3 mt-2 ">
                    <form>
                  <div className="card-header">Thêm mới</div>
                       <div className="card-body text-primay">
              <div className="form-group">
                           <label htmlFor="User">Tên User</label>
                           <input type="text" name="User" id="User" placeholder="Tên User" className="form-control" onChange={(event)=>this.Test(event) }  required/>    
                         </div>
                         <div className="form-group">
                           <label htmlFor='dt  '>Điện thoại</label>
                           <input type="text" name="dt" id='dt' placeholder="Số Điện Thoại" className="form-control" onChange={(event)=>this.Test(event)}  required />    
                         </div>
                        <div className="form-group">
                           <select className="custom-select" name="Permisson" onChange={(event)=>this.Test(event)} required>
                             <option value>Lựa chọn</option>
                             <option value="Admin">Admin</option>
                             <option  value="Moderator">Moderator     </option>
                             <option  value="Normal ">Normal</option>
                           </select>
                           <div className="invalid-feedback">Example invalid custom select feedback</div>
                         </div>
                         <input type="reset" className="btn btn-primary btn-block" onClick = {()=>this.Check()} value= "Thêm Mới" />
                       </div>
                       </form>
                    </div>
                </div>
               
              </div>
              </div>
            )
        }
        return (
            <div></div>
  
        );
    }
}
export default AddUser;