import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "@/components/shared/Card";
import { Rocket } from "lucide-react";

describe("BlogCard", () => {
  it("duhet të shfaqë titullin dhe përshkrimin e blogut", () => {
    render(
      <Card icon={Rocket} title="Titulli i Blogut" description="Përshkrim i blogut këtu." />
    );

    // Kontrollo që titulli të jetë në dokument
    expect(screen.getByText("Titulli i Blogut")).toBeInTheDocument();

    // Kontrollo që përshkrimi të jetë në dokument
    expect(screen.getByText("Përshkrim i blogut këtu.")).toBeInTheDocument();
  });
});