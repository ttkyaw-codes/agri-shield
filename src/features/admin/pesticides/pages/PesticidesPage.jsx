import Container from "@/components/Container";
import React from "react";
import Header from "../../../../components/Header";
import PesticideSection from "../components/PesticideSection";

export default function PesticidesPage() {
  return (
    <Container>
      <Header>
        <PesticideSection />
      </Header>
    </Container>
  );
}
