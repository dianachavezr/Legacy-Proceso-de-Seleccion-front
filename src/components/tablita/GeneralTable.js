import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "../../components/search/Search";
import RequestService from "../../config/index";
import { CSVLink } from "react-csv";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function GeneralTable({ rows, actions = false }) {
  const classes = useStyles();

  const header = [];

  for (const key in rows[0]) {
    header.push(key);
  }

  const getUser = async () => {
    const { data } = await RequestService.get("/candidate/candidate");
    const { users } = data;
  };
  getUser();

  return (
    <>
      <SearchBar />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((row, index) => (
                <TableCell key={index} align="center">
                  {row}
                </TableCell>
              ))}
              {actions && <TableCell align="center">Acciones</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((prop) => (
              <TableRow key={prop.id}>
                {header.map((row, index) => (
                  <TableCell key={index} align="center">
                    {prop[row]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  {actions &&
                    actions.map((action, index) =>
                      action.status ? (
                        <span key={index}>{action.icon}</span>
                      ) : null
                    )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="containerButton">
        <div>
          <CSVLink data={rows} filename="prueba CSV">
            <button className="btn btn-success">Exportar</button>
          </CSVLink>
        </div>
      </div>
    </>
  );
}
