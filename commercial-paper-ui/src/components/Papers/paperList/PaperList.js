import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axiosInstance from '../../../api/axiosInstance';
import AddPaper from '../addPapper/addPapper';
import BuyPaper from '../buyPapper/BuyPaper';
import { CompareArrowsOutlined } from '@material-ui/icons';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  console.log("props", props)
  const { row } = props;
  useEffect(_=>{console.log("row", row)}, [])
  const classes = useRowStyles();
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState();

  const historyRequest = async () => {
    if (open === false) {
      const certificate = localStorage.getItem('certificate');
      const privateKey = localStorage.getItem('privateKey');
      const resp = await axiosInstance.post('/api/history', {
        certificate,
        privateKey,
        paperNumber: row.paperNumber
      })
      setHistory(resp.data[0])
      setOpen(!open)
    }
    setOpen(!open)

  }

  return (
    <React.Fragment>
      <TableRow className={classes.root} key={row.key}>
        <TableCell>
          { props.user.company === 'org2' ? <IconButton aria-label="expand row" size="small" onClick={historyRequest}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> : <></>}
        </TableCell>
        <TableCell component="right" scope="row">
          {row.paperNumber}
        </TableCell>
        <TableCell align="right">{row.issueDateTime}</TableCell>
        <TableCell align="right">{row.issuer}</TableCell>
        <TableCell align="right">{row.owner}</TableCell>
        <TableCell align="right">{row.maturityDateTime}</TableCell>
        <TableCell align="right">{row.faceValue}</TableCell>
        {props.user.company === 'org1' ? <BuyPaper/>  : <></>}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Issued date</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Owner</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {history ? <TableRow>
                      <TableCell component="th" scope="row">
                        {history.Value.currentState}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {history.Timestamp}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {history.Value.issueDateTime}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {history.Value.faceValue}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {history.Value.owner}
                      </TableCell> 
                    </TableRow> :<></>} 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function PaperList({user, loader}) {
  const getData = async () => {
    loader(true)
    const certificate = localStorage.getItem('certificate');
    const privateKey = localStorage.getItem('privateKey');
    const resp = await axiosInstance.post('/api/history', {
      certificate,
      privateKey,
      paperNumber: 'all'
    })
    const dataMap = resp.data.map(r => r.Record)
    loader(false)
    return dataMap;
  }
  

  const [data, setData] = useState();
  const addRow = async row => {
    
    let newData = data;
    newData.push(row.data)
    setData(await getData(loader))
  }

  useEffect(async function () {
    setData(await getData())
  }, [])

  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>PaperNo</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Issuer</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Maturity Date Time</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data  && data.map((row) => (
            <Row key={row.key} row={row} user={user} />
          )) }
        </TableBody>
           
      </Table>
    </TableContainer>
    {user.company === 'org2' ? <AddPaper data={data}  addRow={addRow} loader={loader}/> : ""}
    </>
  );
}