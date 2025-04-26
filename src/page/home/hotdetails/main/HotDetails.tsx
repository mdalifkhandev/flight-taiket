import { Box, Button, ButtonGroup } from "@mui/material";
import Fligth from "../fligrh/Fligth";
import GroupFligth from "../groupFligth/GroupFligth";
import { useState } from "react";
import Tore from "../tore/Tore";
import Visa from "../visa/Visa";


const conponent=[
    {
      label:"Fligrh",
      component:Fligth
    },
    {
      label:"Group Fligth",
      component:GroupFligth
    },
    {
      label:"Tore",
      component:Tore
    },
    {
        label:"Visa",
        component:Visa
    }
  ]

const HotDetails = () => {

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
              borderRadius:0,
              backgroundColor: activeIndex === index ? "#fff" : "#00dd90",
              color: activeIndex === index ? "#000000" : "#000000",
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

export default HotDetails;