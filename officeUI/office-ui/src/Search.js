import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




var stationeryData = [];
  
export default function DenseTable() {
  const classes = useStyles();
  function search(){     
    var d=document.getElementById('age-native-simple').value;    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "data":d
        })
  };
  return fetch('http://localhost:8080/search',requestOptions)
      .then(response => response.json())
      .then(data => stationeryData=data.slice()).catch(error => alert('Error! ' + error.message));
  
   
      
  }
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  if(stationeryData){
   
  return (
    
   
 
    <TableContainer component={Paper}>
       <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Stationery</InputLabel>
    <Select
      native
      value={state.age}
      onChange={handleChange}
      inputProps={{
        name: 'age',
        id: 'age-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value="Book">Book</option>
      <option value="Pen">Pen</option>
      <option value="Pencil">Pencil</option>
    </Select>
    </FormControl>
       <SearchIcon onClick={search} />
      
       <Table id="sTable" className={classes.table} size="small" aria-label="a dense table" >
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell>
      </TableRow>
    </TableHead>  
    <TableBody>{stationeryData.map((stationeryData1) => (       
        <TableRow key={stationeryData1.name}>
          <TableCell component="th" scope="row">{stationeryData1.userName}</TableCell>
          <TableCell align="right">{stationeryData1.userName}</TableCell>
          <TableCell align="right">{stationeryData1.email}</TableCell>
          <TableCell align="right">{stationeryData1.stationeryName}</TableCell>
          <TableCell align="right">{stationeryData1.totalCount}</TableCell>
        </TableRow> 
      ))}
    </TableBody>
  </Table>

    </TableContainer>
  );
    }else{
     
      return (
        <div>
          <TableContainer component={Paper}>
       <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Stationery</InputLabel>
    <Select
      native
      value={state.age}
      onChange={handleChange}
      inputProps={{
        name: 'age',
        id: 'age-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value="Book">Book</option>
      <option value="Pen">Pen</option>
      <option value="Pencil">Pencil</option>
    </Select>
    </FormControl>
       <SearchIcon onClick={search} />
      </TableContainer>
         
        </div>
      )
    }
 
}
