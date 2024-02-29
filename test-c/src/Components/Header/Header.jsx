import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";

import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const tabsArray = [
    { tabName: "Home", link: "/" },
    { tabName: "About", link: "/about" },
    { tabName: "Services", link: "/services" },
    { tabName: "Contact", link: "/contact" },
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlenavigate = (link) =>{
    navigate(link)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
       {tabsArray.map((tab, index)=><Tab onClick={()=>{handlenavigate(tab.link)}} key={index }label={tab.tabName} />) }
      </Tabs>
    </Box>
  );
};

export default Header;
