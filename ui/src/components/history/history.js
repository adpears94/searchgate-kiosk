import { useState, useContext } from "react";
import { VehicleContext } from "../VehicleContext";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

export const History = () => {
  const { visitorDetails } = useContext(VehicleContext);
  const [pageSize, setPageSize] = useState(50);

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 200,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      // editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      // editable: true,
    },
    {
      field: "state",
      headerName: "State",
      // type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: "drivers_license",
      headerName: "Drivers License",
      type: "number",
      width: 110,
      // editable: true,
    },
    {
      field: "plate",
      headerName: "plate",
      // type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: "make",
      headerName: "Make",
      // type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: "model",
      headerName: "Model",
      // type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: "fullName",
      headerName: "Full DL",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.state || ""} ${params.row.drivers_license || ""}`,
    },
  ];

  // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }
  const rows = [];
  visitorDetails.map((visitor) => {
    rows.push({
      date:
        visitor.date.split("T")[0] +
        " : " +
        visitor.date.split("T")[1].slice(0, 5),
      // time: visitor.date.split("T")[1].split(".")[0],
      id: visitor.id,
      lastName: visitor.last_name,
      firstName: visitor.first_name,
      state: visitor.state,
      drivers_license: visitor.drivers_license,
      plate: visitor.plate,
      make: visitor.make,
      model: visitor.model,
    });
    return rows;
  });

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
        <h1>History</h1>
        {/* <SearchBar /> */}
      </Box>
      <Box>
        {/* <Box sx={{ height: 700, width: "100%" }}> */}
        <div style={{ height: "77vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(e) => setPageSize(e)}
            rowsPerPageOptions={[10, 20, 50, 100]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            components={{
              Toolbar: CustomToolbar,
            }}
          ></DataGrid>
        </div>
      </Box>
    </>
  );
};
