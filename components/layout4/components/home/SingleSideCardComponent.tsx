"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { Button, Paper } from "@mui/material";

import { List, ListItem } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const SingleSideCardComponent = ({
  title,
  Description,
  price,
  selectedPackege,
  setSelectedPackege,
  setSelectedValue,
  setValue,
  clearErrors,
}: {
  title: string;
  Description: string[];
  price: string;
  selectedPackege: any;
  setSelectedPackege: any;
  setSelectedValue: any;
  setValue: any;
  clearErrors: any;
}) => {
  return (
    <>
      <Paper
        sx={{
          maxWidth: {
            xs: "350px",
            sm: "350px",
            md: "300px",
          },
          padding: {
            xs: "5%",
            sm: "5%",
            md: "5%",
          },
          ":hover": {
            boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.1)",
            transform: "scale(1.01)",
          },
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            textAlign="center"
            pb={1}
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontWeight: 600 }}
            // color="#f25c5c"
            color="primary"
            textAlign="center"
            // variant="subtitle1"
          >
            &#8377;{" "}
            <Typography component="span" variant="h6" sx={{ fontWeight: 600 }}>
              {price}
            </Typography>
          </Typography>

          <Stack
            // border="1px solid"
            flexDirection="column"
            justifyContent="center"
            // alignItems="center"
          >
            <Typography variant="subtitle1" pb={1}>
              Description :
            </Typography>

            <List
              sx={{
                padding: 0,
                gap: 2,
                margin: 0,
                minHeight: "200px",
                ".MuiListItemText-root": {
                  margin: 0,
                },
              }}
            >
              {Description.map((item, i) => {
                return (
                  <ListItem
                    key={i}
                    sx={{
                      padding: "3px 0",
                    }}
                  >
                    <Box mb="auto" pr={1}>
                      <DoneIcon fontSize="small" />
                    </Box>
                    <Typography variant="body2">{item}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              paddingTop: {
                xs: 0,
                sm: 0,
                md: 1,
              },
            }}
          >
            <Button
              className="selectCardButtonLayout4"
              onClick={() => {
                setSelectedPackege({ title, Description, price });
                setSelectedValue("");
                setValue("nameOfThePackege", { title, Description, price });
                clearErrors("nameOfThePackege");
              }}
              variant="contained"
            >
              Select
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default SingleSideCardComponent;
