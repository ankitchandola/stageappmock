"use client";

import React, { useState, useEffect } from "react";
import RowDataItems from "./RowItems";
import { rowData } from "@/types/rowTypes";

export default function RowData() {
  const [rowData, setRowData] = useState<rowData | null>(null);

  // Fetching row data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev-api.stage.in/v23/assignment/row-data"
        );
        const data = await response.json();
        setRowData(data.data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  /** @todo  add skeletal loader when data isnt available */

  if (!rowData) return null;

  return <RowDataItems rowData={rowData} />;
}
