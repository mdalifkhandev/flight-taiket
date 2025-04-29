import { useState } from "react";
import Flight from "./flight/Flight";
import Hotel from "./hotel/Hotel";
import Tour from "./tour/Tour";
import Visa from "./visa/Visa";
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";

type TabItem = {
  label: string;
  component: React.ComponentType;
};

const cardComponents: TabItem[] = [
  { label: "✈ Flight", component: Flight },
  { label: "🏛 Hotel", component: Hotel },
  { label: "🏃🏿‍♂️ Tour", component: Tour },
  { label: "⌨ Visa", component: Visa },
];

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveCard = cardComponents[activeIndex].component;
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* Responsive Menu */}
      {isMobile ? (
        <Stack
          spacing={2}
          sx={{
            marginBottom: 3,
            marginTop: 4,
            width: "100%",
          }}
        >
          {cardComponents.map((tab, index) => (
            <Button
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                backgroundColor: activeIndex === index ? "#00dd90" : "#fff",
                color: activeIndex === index ? "#fff" : "#444",
                '&:hover': {
                  backgroundColor: activeIndex === index ? "#00dd90" : "#f0f0f0",
                },
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Stack>
      ) : (
        <ButtonGroup
          variant="outlined"
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 3,
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            marginTop: 4,
          }}
        >
          {cardComponents.map((tab, index) => (
            <Button
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                padding: 10,
                px: 5,
                py: 0,
                textTransform: "none",
                fontWeight: 500,
                borderRadius: 0,
                backgroundColor: activeIndex === index ? "#00dd90" : "#fff",
                color: activeIndex === index ? "#fff" : "#444",
                '&:hover': {
                  backgroundColor: activeIndex === index ? "#00dd90" : "#f0f0f0",
                },
                borderRight: index !== cardComponents.length - 1 ? "1px solid #ccc" : "none",
              }}
            >
              {tab.label}
            </Button>
          ))}
        </ButtonGroup>
      )}

      {/* Dynamic Card */}
      <ActiveCard />
    </Box>
  );
};

export default Card;
