import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { data } from "../data";
import RowForm from "./RowForm";
const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
};

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Total (comments)</TableCell>
            <TableCell>Fixed</TableCell>
            <TableCell>Remaining</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.date}>
                <TableCell>{n.date}</TableCell>
                <TableCell>{n.tagsTotal}</TableCell>
                <TableCell>{n.tagsFixed}</TableCell>
                <TableCell>{n.tagsRemaining}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <RowForm />
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
