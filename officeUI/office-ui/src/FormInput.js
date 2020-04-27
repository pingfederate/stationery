import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));





function submitData(){
  
  var nameInp=document.getElementById("nameId").value;
  var emailInp=document.getElementById("emailId").value;
  var roleIdInp=document.getElementById("roleId").value;
  var departInp=document.getElementById("departId").value;
  var stationeryInp=document.getElementById("stationeryId").value;
  var totalCountInp=document.getElementById("totalCountId").value;
  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "userName":nameInp,
      "email":emailInp,
      "userRole":roleIdInp,
      "department":departInp,
      "stationeyName":stationeryInp,
      "totalCount":totalCountInp 
      })
};
fetch('http://localhost:8080/add', requestOptions)
    .then(response => response.json())
    .then((data) => {     
      if(data.message==='Success'){
         alert("Record added successfully");
        }
}).catch(console.log)


}

function update(){
  

  var departInp=document.getElementById("departId").value;
  var stationeryInp=document.getElementById("stationeryId").value;
  var totalCountInp=document.getElementById("totalCountId").value;
  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({    
      "department":departInp,
      "stationeyName":stationeryInp,
      "totalCount":totalCountInp 
      })
};
fetch('http://localhost:8080/update', requestOptions)
    .then(response => response.json())
    .then((data) => {     
      if(data.message==='Success'){
         alert("Record Updated successfully");
        }
}).catch(console.log)


}


function deletes() {
  
  var stationeryInp=document.getElementById("stationeryId").value;
  
  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      "stationeyName":stationeryInp     
      })
};
fetch('http://localhost:8080/delete', requestOptions)
    .then(response => response.json())
    .then((data) => {     
      if(data.message==='Success'){
         alert("Record Deleted successfully");
        }
}).catch(console.log)


}


export default function BasicTextFields() {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  const classes = useStyles();

 

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
   <TextField id="nameId" label="username" value={name}
          onChange={e => setName(e.target.value)} />
           <TextField id="emailId" label="email" />
           <TextField id="roleId" label="user_role" />  
            <select id="departId">
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Mechanial">Mechanical</option>
        <option value="Electrical">Electrical</option>
        <option value="Civil">Civil</option>
      </select> 
      <select id="stationeryId">
        <option value="Book">Book</option>
        <option value="Pen">Pen</option>
        <option value="Pencil">Pencil</option>
        <option value="Stapplers">Stapplers</option>
        <option value="File">File</option>
      </select>
      
       <select id="totalCountId">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
       
        <div className={classes.root}>

        <table>
          <tbody>
            <tr>
          <td> <Button variant="contained" color="secondary" onClick={submitData}>
          Submit
        </Button> </td>
          <td><Button variant="contained" color="secondary" onClick={update}>
          Update
        </Button></td>
          <td><Button variant="contained" color="secondary" onClick={deletes}>
          Delete
        </Button></td>
        </tr>

        </tbody>
        </table>
      
      </div>

      
      
      
      
    </form>
  );
}