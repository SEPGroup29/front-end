import React from "react";
import MaterialTable from "material-table";
import { TablePagination } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// https://material-table.com/#/docs/get-started

const useStyles = makeStyles({
  root: {
    backgroundColor: "blue",
    color: "green"
  },
  toolbar: {
    backgroundColor: "white"
  },
  caption: {
    color: "red",
    fontSize: "20px"
  },
  selectIcon: {
    color: "green"
  },
  select: {
    color: "green",
    fontSize: "20px"
  },
  actions: {
    color: "blue"
  }
});

export default function MaterialTableDemo() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      options={{
        actionsCellStyle: {
          backgroundColor: "#ffccdd",
          color: "#FF00dd"
        },

        headerStyle: { backgroundColor: "black", color: "white" }
      }}
      // icons={{Add: () => 'Add Row'}}
      actions={[
        {
          icon: "save",
          iconProps: { style: { fontSize: "14px", color: "green" } },
          tooltip: "Save User",
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        }
      ]}
      components={{
        Pagination: props => (
          console.log(props),
          (
            <TablePagination
              // ActionsComponent={()=><div>hi...</div>}
              //{...props}
              // labelRowsPerPage={<div>{props.labelRowsPerPage}</div>}
              //labelDisplayedRows={row => <div style={{ color:'green' }}>{props.labelDisplayedRows(row)}</div>}
              component="div"
              colSpan={props.colSpan}
              count={props.count}
              rowsPerPage={props.rowsPerPage}
              page={props.page}
              onChangePage={props.onChangePage}
              onChangeRowsPerPage={this.onChangeRowsPerPage}
              classes={{
                root: classes.root,
                toolbar: classes.toolbar,
                caption: classes.caption,
                selectIcon: classes.selectIcon,
                select: classes.select,
                actions: classes.actions
              }}
            />
          )
        )
      }}
    />
  );
}
//https://stackoverflow.com/questions/59781114/changing-the-style-of-actions-in-material-table-react?noredirect=1#comment105743215_59781114
