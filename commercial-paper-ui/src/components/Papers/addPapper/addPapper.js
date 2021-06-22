import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axiosInstance from '../../../api/axiosInstance';

export default function AddPaper(props) {

    const [open, setOpen] = React.useState(false);
    const [cost, setCost] = useState();
    const [date, setDate] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleName = e => setCost(e.target.value)
    const handleDate = e => setDate(e.target.value)

    const addPapeRequest = async (e) => {
        props.loader(true)
        handleClose();
        const certificate = localStorage.getItem('certificate');
        const privateKey = localStorage.getItem('privateKey');
        const paperNumber = props.data.length + 1;
        const newPaperNum = "0000" + paperNumber
        const resp = await axiosInstance.post('/api/issue', {
          certificate,
          privateKey,
          paperNumber: newPaperNum,
          redeemDate: date,
          cost
        })
        await props.addRow(resp);
        props.loader(false)
        
    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Paper
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <TextField id="standard-basic" label="Standard" onChange={handleName} />
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDate}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={addPapeRequest} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}