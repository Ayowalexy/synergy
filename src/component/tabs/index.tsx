import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "green",
  },
});

const AntTab = {
  marginRight: "7%",
  minWidth: "25%",
  color: "#878787",
  "&:hover": {
    color: "green",
    borderBottom: "green",

    opacity: 1,
  },
  justifyContent: "space-between",
  "&.Mui-selected": {
    color: "green",
    fontWeight: "500",
    borderBottom: "green",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "green",
    borderBottom: "green",
  },
};

interface Itabs {
  tabs: string[];
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}
export default function CenteredTabs({ tabs, setValue, value }: Itabs) {
  // const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // console.log(value);

  return (
    <Box sx={{ width: "100%", bgcolor: "none" }}>
      <AntTabs value={value} onChange={handleChange} centered>
        {tabs.map((value, i) => (
          <Tab key={i} label={value} sx={AntTab} />
        ))}
      </AntTabs>
    </Box>
  );
}
