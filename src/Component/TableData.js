import React, { Component } from 'react';
import TableDataUser from './TableDataUser';

class TableData extends Component {
    render() {
      return (
        <div className="col">  
        <table className="table table-striped table-inverse table-hover ">
          <thead className="thead-inverse|thead-default">
            <tr>
              <th>Stt</th>
              <th>Tên </th>
              <th>Điên thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          
      {this.props.dataUser.map((value, key)=>{
          return (
            <TableDataUser name = {value.name} id = {value.id} tel = {value.tel} Permission = {value.Permission} editFunc2 = {(event)=> this.props.editFunc(value)} DeletePhanTU = {(event)=>this.props.DeletePhanTU(value.id)} />
          )

     })}
           
           </tbody>
        </table>
      </div>
      )
      

    }
}

export default TableData;