import { Box, Button, ButtonGroup } from "@mui/material";
import Test1 from "./test1";
import Text2 from "./text2";
import { useState } from "react";



const conponent=[
  {
    label:"Test1",
    component:Test1
  },
  {
    label:"Test2",
    component:Text2
  }
]


const test = () => {

const [activeIndex, setActiveIndex] = useState(0);
  const ActiveCard = conponent[activeIndex].component;


  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      {/* MUI Button Group */}
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
              borderRadius:0,
              backgroundColor: activeIndex === index ? "#00dd90" : "#fff",
              color: activeIndex === index ? "#fff" : "#444",
              '&:hover': {
                backgroundColor: activeIndex === index ? "#00dd90" : "#f0f0f0"
              },
              borderRight: index !== conponent.length - 1 ? "1px solid #ccc" : "none"
            }}
          >
            {tab.label}
          </Button>
        ))}
      </ButtonGroup>

      {/* Dynamic Card */}
      <ActiveCard />
    </Box>
  );
};

export default test;