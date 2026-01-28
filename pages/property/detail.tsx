import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  return (
    <>
      <Container>Property Details page</Container>
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
