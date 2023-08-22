import * as React from 'react';
import Typography from '@mui/material/Typography';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";
export default function PaymentForm() {
  const data=useSelector((state)=>{
    return state.users;
   })
   const total = data.items.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0
  );
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Your Order
      </Typography>
      <TableContainer >
        <Table>
          <TableBody>
            {data.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  {item.name}
                </TableCell>
                <TableCell align="right">${item.discountPrice}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">${item.discountPrice * item.quantity}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                <strong>Total:</strong>
              </TableCell>
              <TableCell align="right">
                <strong>${total}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}