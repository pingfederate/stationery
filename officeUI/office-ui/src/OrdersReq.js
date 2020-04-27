import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';




function submitData(email){
       
      var count = document.getElementById("requestCountId").value;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email":email,
          "requestCount":count
          })
    };
      fetch('http://localhost:8080/request',requestOptions)
        .then(response => response.json())
        .then(data =>  {if(data.message==='Success')
          alert("Record Requested successfully");
          
         }         
         );
}
class Orders extends Component {
    
  constructor(props) {
    super(props);
    this.state = {   
      hits: [],
    };
  }


 

  componentDidMount() {
  
    var urlParams = new URLSearchParams(window.location.search);

var em=urlParams.get("email");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email":em
        })
  };
    fetch('http://localhost:8080/getByUser',requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ hits : data }));
  }
 
  render() {
    const { hits } = this.state;
  
		return (
      <React.Fragment>
 

      <Title>Request Form</Title>
     
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Stationery Name</TableCell>
            <TableCell align="right">Total Count</TableCell>
            <TableCell align="right">Request Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hits.map((hit) => (
            <TableRow key={hit.userId}>
              <TableCell align="right">{hit.stationeryName}</TableCell>
              <TableCell align="right">{hit.totalCount}</TableCell>
              <TableCell align="right"> <select id="requestCountId">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select></TableCell>
          <TableCell align="right"> <ShoppingCartIcon onClick={() => submitData(hit.email)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

</React.Fragment>)
    }
}
export default Orders;
    