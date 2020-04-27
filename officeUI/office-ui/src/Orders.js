import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function approve(email) {
 

  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email":email      
      })
};
fetch('http://localhost:8080/approve', requestOptions)
    .then(response => response.json())
    .then((data) => {      
      if(data.message==='Success'){
         alert("Record Approved successfully");
        }
}).catch(console.log)
  
 }
class Orders extends Component {
 
  constructor(props) {
    super(props);
    this.state = {   
      hits: [],
    };
  }


 

  componentDidMount() {
  
    fetch('http://localhost:8080/get')
      .then(response => response.json())
      .then(data => this.setState({ hits : data }));
  }
  
  render() {
    const { hits } = this.state;
   
  
		return (
      <React.Fragment>

      <Title>Recent Orders</Title>
     
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Departement</TableCell>
            <TableCell align="right">Stationer Name</TableCell>
            <TableCell align="right">Request Count</TableCell>
            <TableCell align="right">Total Count</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hits.map((hit) => (
            <TableRow key={hit.userId}>
              <TableCell>{hit.userName}</TableCell>
              <TableCell>{hit.email}</TableCell>
              <TableCell>{hit.userRole}</TableCell>
              <TableCell>{hit.department}</TableCell>
              <TableCell align="right">{hit.stationeryName}</TableCell>
              <TableCell align="right">{hit.requestedcount}</TableCell>
              <TableCell align="right">{hit.totalCount}</TableCell>
              <TableCell align="right">{hit.status}</TableCell>
              <TableCell align="right"><ThumbUpIcon onClick={() => approve(hit.email)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

</React.Fragment>)
    }
}
export default Orders;
    