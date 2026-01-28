import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";

const AgentList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Agents List</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
