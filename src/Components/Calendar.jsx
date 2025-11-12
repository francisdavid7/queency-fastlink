import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import type {} from "@mui/x-date-pickers/themeAugmentation"; // for TypeScript theme typing

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8" // picker highlight color
    },
    text: {
      primary: "#94a3b8", // general text color
      secondary: "#94a3b8"
    },
    background: {
      paper: "#fff" // affects the calendar background
    }
  },
  components: {
    // Date field input
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#1a237e" // input text color
          },
          "& label": {
            color: "#555"
          }
        }
      }
    },

    // Calendar day cells
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: "#94a3b8", // normal day text color
          "&.Mui-selected": {
            backgroundColor: "#1a73e8",
            color: "#fff"
          },
          "&.MuiPickersDay-today": {
            border: "1px solid #1a73e8"
          },
          "&:hover": {
            backgroundColor: "#e3f2fd"
          }
        }
      }
    },

    // Calendar header
    MuiPickersCalendarHeader: {
      styleOverrides: {
        labelContainer: {
          color: "#d32f2f", // month-year text color
          fontWeight: "bold"
        },
        switchViewButton: {
          color: "#1a73e8" // toggle arrow color
        }
      }
    },

    // Date range or calendar root background
    MuiDateRangeCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f0f0"
        }
      }
    }
  }
});

const ThemedDatePicker = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="bg-color rounded-lg" />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ThemedDatePicker;
