import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../Title";
import AddIcon from "@mui/icons-material/Add";
import GridData from "./GridData";
import Copyright from "../Copyright";
import AddTransaction from "../addTransaction";
import { getTransactions } from "../../actions";
import { userId } from "../../Reuseable/global";
const mdTheme = createTheme();

function DashboardContent() {
  const [modal, setModal] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions(userId, (res) => {
      setTransactions(res);
    });
  }, []);

  const handleClickOpen = () => {
    setModal(true);
  };

  return (
    <div>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={2}>
                <Grid
                  xs={6}
                  item
                  alignItems={"start"}
                  sx={{ textAlign: "start" }}
                >
                  <Title>Expense Tracker</Title>
                </Grid>
                <Grid xs={6} item alignItems={"end"} sx={{ textAlign: "end" }}>
                  <Button
                    onClick={() => handleClickOpen()}
                    variant="contained"
                    startIcon={<AddIcon />}
                  >
                    Add Expenses
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <GridData transactions={transactions} />
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
              <AddTransaction modal={modal} setModal={setModal} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
