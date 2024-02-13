import { Stack, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import React from "react";

const AnyThingExtraComponent = ({ register }: { register: any }) => {
  return (
    <>
      <Stack pl={1} pr={1} pt={2}>
        <Typography pb={1} variant="subtitle1">
          Other requirements
        </Typography>
        <TextareaAutosize
          {...register("anythingExtra")}
          maxRows={10}
          minRows={5}
          style={{
            margin: "3px",
            fontSize: "17px",
            borderRadius: "7px",
            height: "100px",
            border: "1px solid #437C17",
          }}
        />
      </Stack>
    </>
  );
};

export default AnyThingExtraComponent;
