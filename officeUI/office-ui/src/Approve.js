import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  },
}));

function submitData(){
  
  var nameInp1=document.getElementById("nameId1").value;
 
  var totalCountInp1=document.getElementById("totalCountId1").value;
  
  const requestOptions = {
    method: 'POST',   
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "userName":nameInp1,
      "totalCount":totalCountInp1
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


export default function BasicTextFields() {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
   <Grid item xs={12} md={8} lg={9}>
              
            </Grid>
      <TextField id="nameId1" label="username" value={name}
          onChange={e => setName(e.target.value)} />

      <TextField id="totalCountId1" label="total_count" />
      <div className={classes.root}>
        <Button variant="contained" color="secondary" onClick={submitData}>
          Approve
        </Button>
      </div>
      
    </form>
  );
}