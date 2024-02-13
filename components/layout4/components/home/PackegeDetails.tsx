"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import PackegeCard from "./PackegeCard";
import SingleSideCardComponent from "./SingleSideCardComponent";

const PackegeDetails = ({
  register,
  setValue,
  errors,
  clearErrors,
}: {
  register: any;
  setValue: any;
  errors: any;
  clearErrors: any;
}) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedPackege, setSelectedPackege] = React.useState<{
    title: string;
    Description: string[];
    price: string;
  }>({ title: "", Description: [], price: "" });
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }} p={1}>
        <Typography variant="h5" pb={1} fontWeight={700}>
          Packege Name:
        </Typography>

        {/*  */}

        <Box
          // className="bottom-animate"
          // data-scroll
          sx={{ minWidth: 120 }}
          flex={1}
        >
          <Select
            error={!(errors.nameOfThePackege === undefined)}
            value={selectedValue}
            onChange={(i, j) => {
              setSelectedValue(i.target.value);
              setValue("SelectPackegeType", i.target.value);
            }}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">
              <em>Select Your Packege</em>
            </MenuItem>
            <MenuItem value={"Single side"}>Single side</MenuItem>
            <MenuItem value={"Both side"}>Both side</MenuItem>
          </Select>
        </Box>
      </Box>
      {selectedPackege.title === "" ? (
        ""
      ) : (
        <>
          <Stack direction="row">
            <Typography pl={1}>
              <Typography
                component="span"
                variant="h5"
                sx={{ fontWeight: 700 }}
                pr={1}
              >
                Packege:{" "}
              </Typography>
            </Typography>
            <Stack pt={1}>
              <Typography
                component="span"
                variant="h6"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                {selectedPackege.title},{" "}
                <Typography pl={2} display="inline-block">
                  {" "}
                  &#8377; {selectedPackege.price}
                </Typography>
              </Typography>
              <Typography
                component="span"
                variant="h6"
                color="primary"
                sx={{ fontWeight: 700 }}
                pt={1}
              >
                Description:
              </Typography>
              {selectedPackege.Description.map((item, i) => {
                return (
                  <Typography
                    key={i}
                    component="span"
                    variant="body1"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: "10px",
                        paddingRight: "2px",
                      }}
                      color="primary"
                    />{" "}
                    {item}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
        </>
      )}
      <Stack
        pt={3}
        pb={2}
        sx={{
          display: `${selectedValue === "" ? "none" : "flex"}`,
          justifyContent: "space-evenly",
        }}
      >
        {selectedValue === "Single side" ? (
          <>
            <SingleSidePackegeCardContainer
              clearErrors={clearErrors}
              setSelectedValue={setSelectedValue}
              selectedPackege={selectedPackege}
              setSelectedPackege={setSelectedPackege}
              setValue={setValue}
            />
          </>
        ) : (
          <>
            <BothSidePackegeCardContainer
              clearErrors={clearErrors}
              setSelectedValue={setSelectedValue}
              selectedPackege={selectedPackege}
              setSelectedPackege={setSelectedPackege}
              setValue={setValue}
            />
          </>
        )}
      </Stack>
    </>
  );
};

const BothSidePackegeCardContainer = ({
  setSelectedValue,
  selectedPackege,
  setSelectedPackege,
  setValue,
  clearErrors,
}: {
  setSelectedValue: any;
  selectedPackege: any;
  setSelectedPackege: any;
  setValue: any;
  clearErrors: any;
}) => {
  return (
    <>
      <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
        {[
          {
            Description: [
              "Lane keeping assistance (LKA) systems apply torque to the steering wheel, or pressure to the brakes, when a lane departure is about to occur.",
              "Lane keeping assistance (LKA) he steering wheel, or",
              "ystems apply torque to the steering wheel, or",
              "systems apply torque to the steering wheel, or",
            ],
            title: "Standard",
            price: "5250.00",
          },
          {
            Description: [
              "Lane keeping assistance (LKA) systems apply torque to the steering wheel, or pressure to the brakes, when a lane departure is about to occur.",
              "Lane keeping assistance (LKA) he steering wheel, or",
              "ystems apply torque to the steering wheel, or",
              "systems apply torque to the steering wheel, or",
            ],
            title: "Standard",
            price: "5250.00",
          },
          {
            Description: [
              "Lane keeping assistance (LKA) systems apply torque to the steering wheel, or pressure to the brakes, when a lane departure is about to occur.",
              "Lane keeping assistance (LKA) he steering wheel, or",
              "ystems apply torque to the steering wheel, or",
              "systems apply torque to the steering wheel, or",
            ],
            title: "Standard",
            price: "5250.00",
          },
          {
            Description: [
              "Lane keeping assistance (LKA) systems apply torque to the steering wheel, or pressure to the brakes, when a lane departure is about to occur.",
              "Lane keeping assistance (LKA) he steering wheel, or",
              "ystems apply torque to the steering wheel, or",
              "systems apply torque to the steering wheel, or",
            ],
            title: "Standard",
            price: "5250.00",
          },
        ].map((item, i) => {
          return (
            <Box key={i}>
              <PackegeCard
                clearErrors={clearErrors}
                Description={item.Description}
                title={item.title}
                price={item.price}
                setSelectedPackege={setSelectedPackege}
                selectedPackege={selectedPackege}
                setSelectedValue={setSelectedValue}
                setValue={setValue}
              />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};
const SingleSidePackegeCardContainer = ({
  setSelectedValue,
  selectedPackege,
  setSelectedPackege,
  setValue,
  clearErrors,
}: {
  setSelectedValue: any;
  selectedPackege: any;
  setSelectedPackege: any;
  setValue: any;
  clearErrors: any;
}) => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
      {[
        {
          Description: [
            "Lane keeping assistance (LKA) systems apply torque to the steering wheel, or pressure to the brakes, when a lane departure is about to occur.",
            "Lane keeping assistance (LKA) he steering wheel, or",
            "ystems apply torque to the steering wheel, or",
            "systems apply torque to the steering wheel, or",
          ],
          title: "Standard",
          price: "5250.00",
        },
        {
          Description: [
            "Lane keeping assistance (LKA) systems apply torque to the steering wheel, or pressure to the brakes, when a lane departure is about to occur.",
            "Lane keeping assistance (LKA) he steering wheel, or",
            "ystems apply torque to the steering wheel, or",
            "systems apply torque to the steering wheel, or",
          ],
          title: "Standard",
          price: "5250.00",
        },
      ].map((item, i) => {
        return (
          <Box key={i}>
            <SingleSideCardComponent
              clearErrors={clearErrors}
              Description={item.Description}
              title={item.title}
              price={item.price}
              setSelectedPackege={setSelectedPackege}
              selectedPackege={selectedPackege}
              setSelectedValue={setSelectedValue}
              setValue={setValue}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default PackegeDetails;
