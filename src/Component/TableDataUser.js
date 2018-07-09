import React, { Component } from 'react';

class TableDataUser extends Component {
  
    render() {
        var id = this.props.id;
        var name =this.props.name;
        var tel = this.props.tel;
        var Permission = this.props.Permission;
        return (
         
          
              <tr>
              <td >{id}</td>
              <td>{name} </td>
              <td>{tel}</td>
              <td>{Permission}</td>
              <td><div>
                  <div className="btn-group">
                    <button className="btn btn-warning" onClick = {()=>this.props.editFunc2()}><i className="fa fa-edit" > Sửa</i></button>
                    <button className="btn btn-danger" onClick = {()=>this.props.DeletePhanTU()}><i className="fa fa-remove"> Xóa</i></button>
                  </div>
                </div></td>
            </tr>
        );
    }
}

export default TableDataUser;