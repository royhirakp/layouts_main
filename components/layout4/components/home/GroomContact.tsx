"use client";

import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

const GroomContact = ({ register, errors }: { register: any; errors: any }) => {
  return (
    <>
      <Box pt={1}>
        <Typography variant="h5" pl={1} fontWeight={700}>
          Bor Contact:
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
                {...register("groomName", {
                  require: true,
                  pattern: /^[A-Za-z\s]+$/,
                })}
                error={!(errors.groomName === undefined)}
                placeholder="Bor er nam"
                fullWidth
              />
            </Box>
          </Box>
          <Box width="100%">
            <Typography variant="subtitle1" pb={1}>
              Address:
            </Typography>
            <Box>
              <TextField
                {...register("groomAddress", {
                  require: true,
                })}
                error={!(errors.groomAddress === undefined)}
                placeholder="bor er address"
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
                error={!(errors.groomEmail === undefined) || false}
                {...register("groomEmail", {
                  require: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                })}
                placeholder="Email"
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
                error={!(errors.groomPhone === undefined)}
                // helperText="Phone no sould be number and length should be 10"
                {...register("groomPhone", {
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

export default GroomContact;
