import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    container: {
        paddingRight: 20,
        paddingLeft: 20,
        display: 'flex',
        marginTop: 20
    },
    dialog: {
        display: 'grid',
        padding: '0px 24px 8px',
        marginTop: -10
    },
    header: {
        fontSize: '1.1em',
        color: "#474747",
        marginTop: 6,
        marginBottom: 9,
        marginLeft: '17%',
        marginRight: '17%'
    },
    button: {
        color: "#00add8a0"
    },
    textField: {
        '& label.Mui-focused': {
            color: "#00add8a0",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "#00add8",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#00add8",
            },
            '&:hover fieldset': {
                borderColor: "#00add8",
            },
            '&.Mui-focused fieldset': {
                borderColor: "#00add8",
            },
        },
    },
}));



const AddPaper = ({ addPaper, lastPaper, isOpen, close }) => {
    const classes = useStyles()

    const [date, setSelectedDate] = useState(new Date())
    const [error, setError] = useState(['', false])
    const [price, setPrice] = useState(0)
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        close(['', false])
    };

    const issuePaper = () => {
        if (isNaN(price) || +price <= 0) {
            setError(['Invalid price, please enter a number greater than zero', true])
            return
        }
        if (date <= new Date()) {
            setError(['Invalid date, please enter a date later than today', true])
            return
        }
        let pad = s => { return (s < 10) ? '0' + s : s; }
        let redeemDate = [pad(date.getDate()), pad(date.getMonth() + 1), date.getFullYear()].join('.')
        let paperNumber = lastPaper === undefined ? '' : lastPaper.Record.paperNumber
        addPaper({
            certificate: localStorage.getItem('certificate'),
            privateKey: localStorage.getItem('privateKey'),
            paperNumber,
            redeemDate,
            cost: price
        })
    }

    const handleDateChange = (e) => {
        setError(false)
        if (e <= new Date()) {
            setError(['Invalid date, please enter a date later than today', true])
            return
        }
        console.log(e)
        console.log("new data", new Date())
        setSelectedDate(e)
    }

    const handlerPrice = (e) => {
        setError(false)
        setPrice(e.target.value)
    }

    return (
        <>
            <Dialog open={open} onClose={() => close(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new paper</DialogTitle>
                <DialogContent
                    className={classes.dialog}
                >
                    <TextField
                        className={classes.textField}
                        id="standard-textarea"
                        label="Price"
                        onChange={handlerPrice}
                        placeholder="5000"
                        type="number"
                        multiline
                    />

                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        format="dd.MM.yyyy"
                        className={classes.textField}
                        onChange={handleDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </DialogContent>
                <DialogActions>
                    <Button
                        className={classes.button}
                        onClick={issuePaper}
                    >
                        Issue
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={() => close(false)}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={error[1]}
                autoHideDuration={3000}
                onClose={() => setError(['', false])}
            >
                <Alert
                    onClose={() => setError(['', false])}
                    severity='error'
                >
                    {error[0]}
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddPaper