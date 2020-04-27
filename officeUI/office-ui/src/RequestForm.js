import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));





function submitData(){
  
  var emailInp=document.getElementById("emailId").value;  
  var stationeryInp=document.getElementById("stationeryId").value;
  var totalCountInp=document.getElementById("totalCountId").value;
  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({     
      "email":emailInp,    
      "stationeyName":stationeryInp,
      "totalCount":totalCountInp 
      })
};
fetch('http://localhost:8080/request', requestOptions)
    .then(response => response.json())
    .then((data) => {     
      if(data.message==='Success'){
         alert("Record added successfully");
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
  
           <TextField id="emailId" label="email" />
          
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
          <td> <ShoppingCartIcon onClick={submitData.bind(this)}/> </td>
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