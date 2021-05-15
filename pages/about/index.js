import React from "react";
import Router from "next/router";
import MainLayout from "../../components/Mainlayout/mainLayout";
import AboutUs from "../../components/AboutUs/aboutUs";
export default function About() {
  return (
    <MainLayout title={"About Page"}>
      <AboutUs />
    </MainLayout>
  );
}
