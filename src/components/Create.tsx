import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, {ReactNode, useEffect, useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Create = () => {
    const [open, setOpen] = React.useState(false);
    const [orderType, setOrderType] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://red-candidate-web.azurewebsites.net/api/Orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4"
          }
        })
          .then(resp => resp.json())
          .then(resp => {
            setData(resp)
          })
      }, [])

    const handleChange = (event: SelectChangeEvent) => {
        setOrderType(event.target.value as string);
      };
    
    return(
    <div>
        <Button variant="contained" startIcon={<AddIcon/>} onClick={handleOpen}>Create Order</Button>
        <FormControl fullWidth>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create An Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create an order to displayed in the table from the Swagger UI API.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="createdDate"
            label="Created Date"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Created By"
            type="text"
            fullWidth
            variant="outlined"
          />
          <Select id="orderType" value={orderType} label="Order Type" onChange={handleChange}>
            <InputLabel>Order Type</InputLabel>
            <MenuItem>Standard</MenuItem>
          <MenuItem>ReturnOrder</MenuItem>
          <MenuItem>SaleOrder</MenuItem>
          <MenuItem>PurchaseOrder</MenuItem>
          <MenuItem>TransferOrder</MenuItem>
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Customer"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>

        </FormControl>
    </div>
    )
}

export default Create;