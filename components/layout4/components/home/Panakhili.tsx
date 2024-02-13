"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DatePickerMuiComponent from "./DatePickerMuiComponent";

const Panakhili = ({
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
            Panakhili :
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
          // border="1px solid"
          sx={{
            padding: "0px 0px",
            // maxWidth: "500px",
            margin: "10px auto",
            display: `${selectedValue === "" ? "none" : "flex"}`,
          }}
        >
          <Stack pl={1} pr={1} sx={{ width: "100%" }}>
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

export default Panakhili;

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
          setValue("panakhili", i.target.value);
          // console.log(watch("SelectPackegeType"));
        }}
        displayEmpty
        placeholder="hirak"
        label=""
        sx={{
          // borderRadius: "7px",
          // height: "40px",
          padding: 0,
          // fontSize: "20px",
        }}
        fullWidth
      >
        <MenuItem value="">
          <em>Select Your Choice</em>
        </MenuItem>
        {["Bride", "Groom"].map((option, i) => {
          return (
            <MenuItem key={i} value={option}>
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
          setValue("panakhili", i.target.value);
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
            <MenuItem key={i} value={option}>
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
      <Typography
        variant="subtitle1"
        pb={1}
        // sx={{ fontWeight: 600, color: "#eb5e5e" }}
        // fontWeight={800}
      >
        Select Your Panakhili Dates:
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
              dateFor="panakhiliBrideDate"
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
              dateFor="panakhiliGroomDate"
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
            Select Your Panakhili Date:
          </Typography>
          <Stack sx={{ width: "100%" }}>
            <DatePickerMuiComponent
              clearErrors={clearErrors}
              errorState={false}
              errors={errors}
              setValue={setValue}
              dateFor="panakhiliDate"
            />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
