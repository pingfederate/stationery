import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    var urlParams = new URLSearchParams(window.location.search);
    var up=urlParams.get("email");
    var  dUrl=decodeURIComponent(up);
 
  var stationeryInp=document.getElementById("stationeryId").value;
  var requestCountId=document.getElementById("requestCountId").value;
  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email":dUrl,
      "stationeyName":stationeryInp,
      "requestCount":requestCountId
      })
};
return fetch('http://localhost:8080/request', requestOptions).then(response => response.json()).then((data) => {     
    
if(data.message==='Success'){
         alert("Record updated successfully");
        }
}).catch(console.log)
}

export default function BasicTextFields() {

  const handleSubmit = (evt) => {
      evt.preventDefault();
     
  }
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
     <TextField id="stationeryId" label="stationery_name" />
      <TextField id="requestCountId" label="request_count" />
      <div className={classes.root}>
         <ShoppingCartIcon/> 
        <Button variant="contained" color="secondary" onClick={submitData}>
          Request
        </Button>
      </div>
      
    </form>
  );
}