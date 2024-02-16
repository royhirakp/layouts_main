"use client";
import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

const BrideContact = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <Box pt={2}>
        <Typography variant="h5" fontWeight={700} pl={1}>
          <b>Bou Contact </b>
        </Typography>

        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
          pb={1}
          pr={1}
          pl={1}
          gap={2}
        >
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Name :
            </Typography>
            <Box>
              <TextField
                placeholder="bou er nam"
                fullWidth
                {...register("brideName", {
                  require: true,
                  pattern: /^[A-Za-z\s]+$/,
                })}
                error={!(errors.brideName === undefined)}
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Address:
            </Typography>
            <Box>
              <TextField
                {...register("brideAddress", {
                  require: true,
                })}
                error={!(errors.brideAddress === undefined)}
                placeholder="bou er Address"
                fullWidth
              />
            </Box>
          </Box>
        </Stack>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
          pr={1}
          pl={1}
          gap={2}
        >
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Email :
            </Typography>
            <Box>
              <TextField
                error={!(errors.brideEmail === undefined) || false}
                {...register("brideEmail", {
                  require: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                })}
                placeholder="Bride Email"
                fullWidth
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Mobile No :
            </Typography>
            <Box>
              <TextField
                // {...register("bridePhone")}
                error={!(errors.bridePhone === undefined)}
                // helperText="Phone no sould be number and length should be 10"
                {...register("bridePhone", {
                  require: true,
                  minLength: 10,
                  maxLength: 10,
                  pattern: /^[0-9]+$/i,
                })}
                onInput={(e: any) => {
                  // console.log("oninputttt--", e.target?.value);
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                placeholder="Phone"
                fullWidth
                type="text"
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default BrideContact;
