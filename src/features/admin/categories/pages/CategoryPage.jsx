import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import CategorySection from "../components/CategorySection";
import Header from "../../../../components/Header";

const CategoryPage = () => {
  return (
    <>
      <Header>
        <BreadCrumb currentPageTitle={`fertilizers`} />
        <CategorySection />
      </Header>
    </>
  );
};

export default CategoryPage;
