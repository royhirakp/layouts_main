"use client";
import React from "react";

import {
  Box,
  Typography,
  Stack,
  Paper,
  Divider,
  Button,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import ContentContainer from "../../container/ContentContainer";
const Course = () => {
  return (
    <div>
      <ContentContainer style={{}}>
        <Box>
          <Typography
            variant="h4"
            textAlign="center"
            color="secondary.main"
            fontWeight={600}
            pb={3}
          >
            Courses
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
          >
            {[
              {
                title: "Learn javascript",
                ratting: 3,
                ratting_count: 19,
                price: "45000",
                imageUrl: "/dataforLayout3/course1.png",
              },
              {
                title: "Learn AWS",
                ratting: 4,
                ratting_count: 35,
                price: "50000",
                imageUrl: "/dataforLayout3/course2.png",
              },
              {
                title: "Learn React",
                ratting: 2,
                ratting_count: 59,
                price: "1000",
                imageUrl: "/dataforLayout3/course3.png",
              },
              // {
              //   title: "javascript",
              //   ratting: 3,
              //   ratting_count: 59,
              //   price: "50000",
              //   imageUrl: "/dataforLayout3/course2.png",
              // },
            ].map((item, i) => {
              return (
                <Box key={i}>
                  <CourseCard item={item} />
                </Box>
              );
            })}
          </Stack>
        </Box>
      </ContentContainer>
    </div>
  );
};

export default Course;

const CourseCard = ({ item }: { item: any }) => {
  const [rating, setRating] = React.useState(item.ratting || 0);

  return (
    <Paper
      sx={{
        width: {
          xs: "250px",
          sm: "320px",
        },
        padding: "9px",
        boxSizing: "border-box",
        color: "secondary.main",
      }}
    >
      <Box>
        <Image
          src={item?.imageUrl}
          alt=""
          width={500}
          height={200}
          style={{ width: "100%" }}
        />
      </Box>
      <Stack direction="column">
        <Stack direction="row" pt={1}>
          <Chip
            label="TPSC"
            sx={{
              backgroundColor: "secondary.main",
              color: "secondary.light",
              padding: "0 5px",
            }}
          />
        </Stack>
        <Typography variant="body2" fontWeight={600} pt={1}>
          {item.title}
        </Typography>

        <Stack direction="row" pt={1} gap={1}>
          <Rating
            style={{ maxWidth: 250, flex: 1 }}
            value={rating}
            onChange={setRating}
          />
          <Typography flex={2}>
            {" "}
            &#40; {item?.ratting_count} students&#41;
          </Typography>
        </Stack>
        <Divider />

        <Stack direction="row" justifyContent="space-between" pt={2} pb={1}>
          <Typography variant="h6" fontWeight={800}>
            &#8377;{item.price}
          </Typography>
          <Stack direction="row">
            <Button className="buttonForLayout3CourseCard" variant="contained">
              Enrole Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
