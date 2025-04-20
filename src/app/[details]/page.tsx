"use client";
import { useParams } from "next/navigation";
import React from "react";

const details = () => {
  const { cover_i } = useParams;
  console.log(cover_i);
  return <div>details page</div>;
};

export default details;
