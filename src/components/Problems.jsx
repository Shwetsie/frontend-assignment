import { v4 as uuidv4 } from "uuid";
import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
export default function Problems() {
  const columns = [
    { id: "title", label: "Title", minWidth: 170, align: "center" },
    { id: "difficulty", label: "Difficulty", minWidth: 100, align: "center" },
    {
      id: "acceptance",
      label: "Acceptance",
      minWidth: 170,
      align: "center",
    },
  ];
  const rows = [
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
    },
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "412%",
    },
    {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, textAlign: "center", fontWeight: "500" }}
                >
                  <b>{column.label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
