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


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const getData = async () => {
  const certificate = localStorage.getItem('certificate');
  const privateKey = localStorage.getItem('privateKey');
  const resp = await axiosInstance.post('/api/history', {
    certificate,
    privateKey,
    paperNumber: 'all'
  })
  const dataMap = resp.data.map(r => r.Record)
  return dataMap;
}

function Row(props) {
  const { row } = props;

  const classes = useRowStyles();
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([])
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
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={historyRequest}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="right" scope="row">
          {row.paperNumber}
        </TableCell>
        <TableCell align="right">{row.issueDateTime}</TableCell>
        <TableCell align="right">{row.issuer}</TableCell>
        <TableCell align="right">{row.owner}</TableCell>
        <TableCell align="right">{row.maturityDateTime}</TableCell>
        <TableCell align="right">{row.faceValue}</TableCell>
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
                    <TableCell>Issued date:</TableCell>
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

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default function CollapsibleTable() {

  const [data, setData] = useState();

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
          { data ? data.map((row) => (
            <Row key={row.key} row={row} />
          )) : <></> }
        </TableBody>

      </Table>
    </TableContainer>
    <AddPaper data={data} />
    </>
  );
}