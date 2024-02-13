"use client";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box } from "@mui/material";

const DatePickerMuiComponent = ({
  dateFor,
  setValue,
  errorState,
  clearErrors,
}: {
  dateFor: any;
  setValue: any;
  errors: any;
  errorState: Boolean;
  clearErrors: any;
}) => {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          // data-scroll
          format="DD/MM/YYYY"
          onChange={(event: any, i) => {
            // console.log(event);
            clearErrors(`${dateFor}`);
            let selectedDate =
              event?.$D + "-" + (event?.$M + 1) + "-" + event?.$y;
            setValue(dateFor, selectedDate);
            // console.log(selectedDate);
          }}
          sx={{
            color: "red",
            width: "100%",
            borderRadius: "7px",
            fieldset: {
              // border: "none",
              borderRadius: "7px",
              border: `1px solid ${errorState ? "red" : "#437C17"}`,
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerMuiComponent;
