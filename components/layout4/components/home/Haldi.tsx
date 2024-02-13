"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DatePickerMuiComponent from "./DatePickerMuiComponent";

const Haldi = ({
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
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }} p={1}>
          <Typography variant="h5" pb={1}>
            Holud :
          </Typography>
          <Box sx={{ minWidth: 120 }} flex={1}>
            {watch("SelectPackegeType") === "Single side" ? (
              <SigleSidePackegDropdownOptions
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                setValue={setValue}
                watch={watch}
              />
            ) : (
              <>
                <BothSIdePackegDropdownOptions
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  setValue={setValue}
                  watch={watch}
                />
              </>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            padding: "0px 0px",
            // maxWidth: "500px",
            margin: "10px auto",
            display: `${selectedValue === "" ? "none" : "flex"}`,
          }}
        >
          <Stack pl={1} pt={3} pb={3} sx={{ width: "100%" }}>
            {selectedValue === "Both Side" ? (
              <BothSideDates
                clearErrors={clearErrors}
                errors={errors}
                setValue={setValue}
              />
            ) : (
              <SingleSideDates
                clearErrors={clearErrors}
                errors={errors}
                setValue={setValue}
              />
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Haldi;

const SigleSidePackegDropdownOptions = ({
  selectedValue,
  setSelectedValue,
  setValue,
  watch,
}: {
  selectedValue: any;
  setSelectedValue: any;
  setValue: any;
  watch: any;
}) => {
  return (
    <>
      <Select
        value={selectedValue}
        onChange={(i, j) => {
          setSelectedValue(i.target.value);
          setValue("haldi", i.target.value);
          // console.log(watch("SelectPackegeType"));
        }}
        displayEmpty
        placeholder="hirak"
        label=""
        sx={{
          // borderRadius: "0",
          // height: "40px",
          padding: 0,
        }}
        fullWidth
      >
        <MenuItem value="">
          <em>Select Your Choice</em>
        </MenuItem>
        {["Bride", "Groom"].map((option, i) => {
          return (
            <MenuItem
              key={i}
              value={option}
              sx={{
                padding: "0 0 0 12px",
                position: "relative",
                top: 0,
                margin: 0,
                // display: `${true ? "none" : "block"}`,
              }}
            >
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

const BothSIdePackegDropdownOptions = ({
  selectedValue,
  setSelectedValue,
  setValue,
  watch,
}: {
  selectedValue: any;
  setSelectedValue: any;
  setValue: any;
  watch: any;
}) => {
  return (
    <>
      <Select
        value={selectedValue}
        onChange={(i, j) => {
          setSelectedValue(i.target.value);
          setValue("haldi", i.target.value);
          // console.log(watch("SelectPackegeType"));
        }}
        displayEmpty
        placeholder="hirak"
        label=""
        fullWidth
      >
        <MenuItem value="">
          <em>Select Your Choice</em>
        </MenuItem>
        {["Both Side", "Bride", "Groom"].map((option, i) => {
          return (
            <MenuItem
              key={i}
              value={option}
              sx={{
                padding: "0 0 0 12px",
                position: "relative",
                top: 0,
                margin: 0,
                // display: `${true ? "none" : "block"}`,
              }}
            >
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

const BothSideDates = ({
  setValue,
  errors,
  clearErrors,
}: {
  setValue: any;
  errors: any;
  clearErrors: any;
}) => {
  return (
    <>
      <Typography variant="subtitle1" pb={1}>
        Select Your Haldi Dates:
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
        // flexWrap="wrap"
        // justifyContent="space-between"
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
          <Typography variant="h6">Bride</Typography>
          <Stack sx={{ width: "100%" }}>
            <DatePickerMuiComponent
              clearErrors={clearErrors}
              errorState={false}
              errors={errors}
              setValue={setValue}
              dateFor="haldiBrideDate"
            />
          </Stack>
        </Stack>
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
          <Typography variant="h6">Groom</Typography>
          <Stack sx={{ width: "100%" }}>
            <DatePickerMuiComponent
              clearErrors={clearErrors}
              errorState={false}
              errors={errors}
              setValue={setValue}
              dateFor="haldiGroomDate"
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const SingleSideDates = ({
  setValue,
  errors,
  clearErrors,
}: {
  setValue: any;
  errors: any;
  clearErrors: any;
}) => {
  return (
    <>
      <Stack direction="column" alignItems="center">
        <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Typography variant="subtitle1" pb={1}>
            Select Your Haldi Date:
          </Typography>
          <Stack sx={{ width: "100%" }}>
            <DatePickerMuiComponent
              clearErrors={clearErrors}
              errorState={false}
              errors={errors}
              setValue={setValue}
              dateFor="haldiDate"
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
