"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import DatePickerMuiComponent from "./DatePickerMuiComponent";

const Asirbad = ({
  setValue,
  errors,
  clearErrors,
  watch,
}: {
  setValue: any;
  errors: any;
  clearErrors: any;
  watch: any;
}) => {
  return (
    <Stack pl={1} pr={1} pt={2} sx={{ width: "100%" }}>
      <Typography pb={1} variant="h5">
        Asirbad er Date:
      </Typography>
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          width: "100%",
        }}
        gap={2}
        alignItems="center"
      >
        <Stack
          direction="column"
          sx={{
            boxSizing: "border-box",
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          <Typography variant="subtitle1">Bou er</Typography>
          <Stack sx={{ width: "100%" }}>
            <DatePickerMuiComponent
              clearErrors={clearErrors}
              errorState={false}
              errors={errors}
              setValue={setValue}
              dateFor="asirbadBrideDate"
            />
          </Stack>
        </Stack>
        <Stack
          sx={{
            boxSizing: "border-box",
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          <Typography variant="subtitle1">Bor er</Typography>
          <Stack sx={{ width: "100%" }}>
            <DatePickerMuiComponent
              clearErrors={clearErrors}
              errorState={false}
              errors={errors}
              setValue={setValue}
              dateFor="asirbadGroomDate"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Asirbad;
