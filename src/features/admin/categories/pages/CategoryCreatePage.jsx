import React from "react";
import Header from "../../../../components/Header";

import BreadCrumb from "@/components/BreadCrumb";
import CategoryCreateSection from "../components/CategoryCreateSection";

const CategoryCreatePage = () => {
  return (
    <>
      <Header>
        <BreadCrumb
          links={[{ title: "Category", path: "/fertilizers" }]}
          currentPageTitle={`create`}
        />
        <CategoryCreateSection />
      </Header>
    </>
  );
};

export default CategoryCreatePage;
