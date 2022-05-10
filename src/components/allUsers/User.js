import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import axios from "axios";

import { PETITIONS } from "../../../requestUrl";

const User = ({ users, requestSearch }) => {
  const token = useSelector((state) => state.token);
  const [rowsTable, setRowsTable] = useState(users);
  const [searched, setSearched] = useState("");

  useEffect(() => {
   
    setRowsTable(users);
  }, [users]);

  const setRole = (id, role) => {
    role = parseInt(role);

    // Update role in admin dashboard
    try {
      axios
        .patch(
          `${PETITIONS.updateRole}${id}`,
          { role },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => res);
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="User_list">
      <div className="Search_boxUser">
        <SearchBar
          placeholder="Buscar"
          value={searched}
          onChange={(searchVal) => {
            requestSearch(searchVal);
          }}
        />
      </div>

      <TableContainer>
        {rowsTable.length > 0 ? (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">NOMBRES</TableCell>
                <TableCell align="center">APELLIDOS</TableCell>
                <TableCell align="center">CORREO</TableCell>
                <TableCell align="center">ROL</TableCell>
                <TableCell align="center">CAMBIAR ROL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsTable?.map((prop, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{prop.names}</TableCell>
                  <TableCell align="center">{prop.surname}</TableCell>
                  <TableCell align="center">{prop.email}</TableCell>
                  <TableCell align="center">
                    {prop.role === 1
                      ? "Admin"
                      : prop.role === 0
                      ? "User"
                      : null}
                  </TableCell>
                  <TableCell align="center">
                    <select
                      defaultValue={prop.role}
                      onChange={(e) => setRole(prop._id, e.target.value)}
                    >
                      <option value="1">Admin</option>
                      <option value="0">Usuario</option>
                    </select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </TableContainer>
    </div>
  );
};

export default User;
