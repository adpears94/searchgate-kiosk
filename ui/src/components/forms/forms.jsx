import { React, useState, useContext } from "react";
import { VehicleContext } from "../VehicleContext";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  MuiAlert,
  Typography,
  TextField,
  Snackbar,
  Stack,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import logo from "../image/logo.svg";
import flash from "../image/flash.png";
import patch from "../image/patch.png";
import shark from "../image/shark.png";
import { height } from "@mui/system";
import PrintModal from "./print_copy";
import { renderMatches } from "react-router";

const tabStyle = {
  height: 500,
  maxHeight: 300,
  overflow: "scroll",
  //backgroundColor: "blue"
};

export const Forms = () => {
  const date = new Date();
  const today =
    date.toISOString().slice(0, 10) + " " + date.toTimeString().slice(0, 5);

  const [failedRegister, setFailedRegister] = useState(false);
  const [flag, setFlag] = useState(false);
  const { API, user, cookies } = useContext(VehicleContext);

  const [vehicle, setVehicle] = useState({
    first_name: "",
    last_name: "",
    plate: "",
    drivers_license: "",
    state: "",
    make: "",
    model: "",
    date: today,
  });

  if (!cookies.user) {
    window.location.href = "/login";
  }

  const reload = () => {
    window.location.reload();
  };
  // console.log('froms.js from context', token)
  // console.log('from forms local storage shit',localStorage.getItem('user'));
  // console.log('admin from local storage', localStorage.getItem('admin'));


  const ab = new Date()
  console.log(ab.toDateString())

  // posting vehicle and user info to the database
  const postUser = () => {
    console.log("posting vehicle");
    setFailedRegister(false);

    if (
      vehicle.first_name === "" ||
      vehicle.last_name === "" ||
      vehicle.plate === "" ||
      vehicle.drivers_license === "" ||
      vehicle.state === "" ||
      vehicle.make === "" ||
      vehicle.model === ""
    ) {
      setFailedRegister(true);

      return;
    }

    fetch(`${API}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(vehicle),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Authorization": `Bearer ${user.Bearer}`
      },
    })
      .then((res) => res.json())
      .then(setFlag(true))

      .catch((err) => {
        console.log("Error: ", err);
      });
    console.log("vehicle has been posted");
    reload();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 1,
        }}
      >
        <img
          style={{ width: "100px", margin: "10px" }}
          src={flash}
          alt="Security Forces Logo"
        />
        <h1 style={{ paddingTop: "2%" }}> Inspection Gate Kiosk </h1>
        <img
          style={{ height: "100px", margin: "10px" }}
          src={patch}
          alt="Security Forces Logo"
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}></Box>

      <Box
        sx={{
          display: "grid",
          boxShadow: 3,
          gap: 1,
        }}
      >
        <Container className="Pass">
          <form
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
            sx={{
              display: "grid",
              boxShadow: 3,
              gap: 1,
              m: 1,
            }}
          >
            <h2> Personal Information </h2>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TextField
                required
                onChange={(e) =>
                  setVehicle((prev) => {
                    return { ...prev, first_name: e.target.value };
                  })
                }
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                error={failedRegister}
                // helperText="Please enter your first name"
                sx={{ boxShadow: 2, m: 1 }}
              />
              <TextField
                onChange={(e) =>
                  setVehicle((prev) => {
                    return { ...prev, last_name: e.target.value };
                  })
                }
                fullWidth
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                error={failedRegister}
                // helperText="Please enter your first name"
                sx={{ boxShadow: 2, m: 1 }}
              />
            </Box>
            <Box>
              <TextField
                error={failedRegister}
                sx={{ boxShadow: 2, m: 1, width: "17%" }}
                variant="outlined"
                required
                id="state"
                label="State"
                name="state"
                defaultValue=""
                select
                onChange={(e) => {
                  setVehicle((prev) => {
                    return { ...prev, state: e.target.value };
                  });
                }}
              >
                <MenuItem value="AL">Alabama</MenuItem>
                <MenuItem value="AK">Alaska</MenuItem>
                <MenuItem value="AZ">Arizona</MenuItem>
                <MenuItem value="AR">Arkansas</MenuItem>
                <MenuItem value="CA">California</MenuItem>
                <MenuItem value="CO">Colorado</MenuItem>
                <MenuItem value="CT">Connecticut</MenuItem>
                <MenuItem value="DE">Delaware</MenuItem>
                <MenuItem value="DC">District of Columbia</MenuItem>
                <MenuItem value="FL">Florida</MenuItem>
                <MenuItem value="GA">Georgia</MenuItem>
                <MenuItem value="GU">Guam</MenuItem>
                <MenuItem value="HI">Hawaii</MenuItem>
                <MenuItem value="ID">Idaho</MenuItem>
                <MenuItem value="IL">Illinois</MenuItem>
                <MenuItem value="IN">Indiana</MenuItem>
                <MenuItem value="IA">Iowa</MenuItem>
                <MenuItem value="KS">Kansas</MenuItem>
                <MenuItem value="KY">Kentucky</MenuItem>
                <MenuItem value="LA">Louisiana</MenuItem>
                <MenuItem value="ME">Maine</MenuItem>
                <MenuItem value="MD">Maryland</MenuItem>
                <MenuItem value="MA">Massachusetts</MenuItem>
                <MenuItem value="MI">Michigan</MenuItem>
                <MenuItem value="MN">Minnesota</MenuItem>
                <MenuItem value="MS">Mississippi</MenuItem>
                <MenuItem value="MO">Missouri</MenuItem>
                <MenuItem value="MT">Montana</MenuItem>
                <MenuItem value="NE">Nebraska</MenuItem>
                <MenuItem value="NV">Nevada</MenuItem>
                <MenuItem value="NH">New Hampshire</MenuItem>
                <MenuItem value="NJ">New Jersey</MenuItem>
                <MenuItem value="NM">New Mexico</MenuItem>
                <MenuItem value="NY">New York</MenuItem>
                <MenuItem value="NC">North Carolina</MenuItem>
                <MenuItem value="ND">North Dakota</MenuItem>
                <MenuItem value="OH">Ohio</MenuItem>
                <MenuItem value="OK">Oklahoma</MenuItem>
                <MenuItem value="OR">Oregon</MenuItem>
                <MenuItem value="PA">Pennsylvania</MenuItem>
                <MenuItem value="PR">Puerto Rico</MenuItem>
                <MenuItem value="RI">Rhode Island</MenuItem>
                <MenuItem value="SC">South Carolina</MenuItem>
                <MenuItem value="SD">South Dakota</MenuItem>
                <MenuItem value="TN">Tennessee</MenuItem>
                <MenuItem value="TX">Texas</MenuItem>
                <MenuItem value="UT">Utah</MenuItem>
                <MenuItem value="VT">Vermont</MenuItem>
                <MenuItem value="VA">Virginia</MenuItem>
                <MenuItem value="WA">Washington</MenuItem>
                <MenuItem value="WV">West Virginia</MenuItem>
                <MenuItem value="WI">Wisconsin</MenuItem>
                <MenuItem value="WY">Wyoming</MenuItem>
                <MenuItem value="AA">Armed Forces Americas</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>

              <TextField
                error={failedRegister}
                sx={{ boxShadow: 2, width: 150, m: 1, width: "80%" }}
                onChange={(e) =>
                  setVehicle((prev) => {
                    return { ...prev, drivers_license: e.target.value };
                  })
                }
                required
                id="dl"
                label="Driver's License Number"
                name="Driver's License Number"
              />
            </Box>
            <h2> Vehicle Information </h2>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TextField
                error={failedRegister}
                onChange={(e) =>
                  setVehicle((prev) => {
                    return { ...prev, plate: e.target.value };
                  })
                }
                required
                id="plate"
                label="Plate Number"
                name="Plate Number"
                sx={{ boxShadow: 2, m: 1, width: "100%" }}
              />
              <TextField
                sx={{ boxShadow: 2, width: 150, m: 1, width: "100%" }}
                error={failedRegister}
                onChange={(e) =>
                  setVehicle((prev) => {
                    return { ...prev, make: e.target.value };
                  })
                }
                required
                id="make"
                label="Make"
                name="make"
              />
              <TextField
                sx={{ boxShadow: 2, width: 150, m: 1, width: "100%" }}
                error={failedRegister}
                onChange={(e) =>
                  setVehicle((prev) => {
                    return { ...prev, model: e.target.value };
                  })
                }
                required
                id="model"
                label="Model"
                name="model"
              />
            </Box>
          </form>
        </Container>

        {/* <Button
              sx={{ boxShadow: 2, width: 150, m: 1 }}
              variant="contained"
              onClick={() =>  <PrintModal element={vehicle}/> 
              }
              
            
            >
              {" "}
              Veryify Information & Print{" "}
            </Button>
             */}
        <PrintModal element={{ vehicle, setFailedRegister, reload }} />
      </Box>
    </>
  );
};
