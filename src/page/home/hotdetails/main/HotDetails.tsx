import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import Fligth from "../fligrh/Fligth";
import GroupFligth from "../groupFligth/GroupFligth";
import { useState } from "react";
import Tore from "../tore/Tore";
import Visa from "../visa/Visa";
import { useMediaQuery } from "@mui/material";

const conponent = [
  {
    label: "Fligrh",
    component: Fligth,
  },
  {
    label: "Group Fligth",
    component: GroupFligth,
  },
  {
    label: "Tore",
    component: Tore,
  },
  {
    label: "Visa",
    component: Visa,
  },
];

const HotDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveCard = conponent[activeIndex].component;
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
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
            {conponent.map((tab, index) => (
              <Button
                key={index}
                onClick={() => setActiveIndex(index)}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  backgroundColor: activeIndex === index ? "#fff" : "#00dd90",
                  color: activeIndex === index ? "#000000" : "#000000",
                  "&:hover": {
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
              backgroundColor: "#00dd90",
              marginTop: 4,
            }}
          >
            {conponent.map((tab, index) => (
              <Button
                className="rounded-md"
                key={index}
                onClick={() => setActiveIndex(index)}
                sx={{
                  px: 5,
                  py: 0,
                  textTransform: "none",
                  fontWeight: 500,
                  borderRadius: 0,
                  backgroundColor: activeIndex === index ? "#fff" : "#00dd90",
                  color: activeIndex === index ? "#000000" : "#000000",
                  "&:hover": {
                    backgroundColor: activeIndex === index ? "#00dd90" : "#f0f0f0",
                  },
                  borderRight: index !== conponent.length - 1 ? "1px solid #ccc" : "none",
                }}
              >
                {tab.label}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <ActiveCard />
      </Box>
    </div>
  );
};

export default HotDetails;