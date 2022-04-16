import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
import moment from "moment";
const header = [
  { title: "TransactionType", align: "left" },
  { title: "Transaction Name", align: "left" },
  { title: "Transaction Description", align: "left" },
  { title: "Transaction Amount", align: "left" },
  { title: "Transaction Date", align: "left" },
];
export default function GridData({ transactions }) {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {header.map(({ title, align }) => (
              <TableCell key={title} align={align}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(
            ({
              transaction_id,
              transaction_type,
              transaction_name,
              transaction_desc,
              transaction_amount,
              transaction_date,
            }) => (
              <TableRow key={transaction_id}>
                <TableCell>{transaction_type}</TableCell>
                <TableCell>{transaction_name}</TableCell>
                <TableCell>{transaction_desc}</TableCell>
                <TableCell align="right">{`$${transaction_amount}`}</TableCell>
                <TableCell>
                  {moment(transaction_date).format("DD-MM-YYYY")}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
