import React, { useState, useEffect } from "react";
import {
  makeStyles,
  DialogContent,
  DialogTitle,
  DialogActions,
  Grid,
  Dialog,
  Backdrop,
  Paper,
  styled,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import moment from "moment";
import { getTransactionTypeAll, createTransactionCall } from "../actions";
import { userId } from "../Reuseable/global";

const style = {
  position: "absolute",
  top: "30%",
  left: "30%",
  transform: "translate(-30%, -30%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Items = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2, 4, 3),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const AddTransaction = ({ modal, setModal }) => {
  const classes = useStyles();

  const [transTypes, setTransTypes] = useState([]);

  useEffect(() => {
    getTransactionTypeAll((res) => setTransTypes(res));
  }, []);

  const handleModalClose = () => setModal(false);

  const [form, setForm] = useState({
    transaction_type_id: "",
    transaction_type: "",
    transaction_name: "",
    transaction_desc: "",
    transaction_amount: 0,
    transaction_date: moment().format("YYYY-MM-DD"),
    user_id: userId,
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleSave = () => {
    let object = {};
    object = form;
    createTransactionCall(object);
  };

  return (
    <div>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={modal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        maxWidth={"sm"}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleModalClose}>
          Add Transaction
        </DialogTitle>
        <DialogContent dividers>
          <Grid sx={style} container spacing={1}>
            <Grid item xs={12}>
              <Items spacing={2}>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel>Transaction Type</InputLabel>
                  <Select
                    value={form.transaction_type}
                    label="Transaction Type"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        transaction_type: e.target.value,
                      });
                    }}
                  >
                    {transTypes.map((data, i) => {
                      return (
                        <MenuItem key={data.id} value={data.transaction_type}>
                          {data.transaction_type}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <FormControl fullWidth className={classes.margin}>
                  <TextField
                    required
                    id="transaction_name"
                    label="Transaction Name"
                    value={form.transaction_name}
                    onChange={(e) => {
                      setForm({ ...form, [e.target.id]: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl fullWidth className={classes.margin}>
                  <TextField
                    id="transaction_desc"
                    label="Transaction Description"
                    value={form.transaction_desc}
                    onChange={(e) => {
                      setForm({ ...form, [e.target.id]: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl fullWidth className={classes.margin}>
                  <TextField
                    id="transaction_amount"
                    type="number"
                    label="Transaction Amount"
                    value={form.transaction_amount}
                    onChange={(e) => {
                      setForm({ ...form, [e.target.id]: e.target.value });
                    }}
                  />
                </FormControl>
              </Items>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleSave}
            color="primary"
          >
            Save
          </Button>
          <Button
            variant="contained"
            autoFocus
            onClick={() => handleModalClose()}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTransaction;
