/* eslint-disable @next/next/no-img-element */
import React from "react";
import useWindowDimensions from "@/components/Hooks/windowDimensionsHook";
import { rowData } from "@/types/rowTypes";

type props = {
  rowData: rowData;
};

export default function RowDataItems(props: props) {
  const { width } = useWindowDimensions();
  const { rowData } = props;
  // Determine image plane based on the window width
  const isVertical = () => {
    if (width < 900) {
      return true;
    } else {
      return false;
    }
  };

  const vipShows = rowData && rowData.rowData.slice(5, 17);
  const specialShows = rowData && rowData.rowData.slice(7, 14);

  return (
    <>
      <div className="row-wrapper">
        <p className="row-title">हमारे टॉप 20 शोज़</p>
        <div className="row-container hide-scroll">
          {rowData &&
            rowData.rowData.map((item) => (
              <div key={item._id}>
                <img
                  src={`${
                    isVertical()
                      ? rowData.rootUrlVertical
                      : rowData.rootUrlHorizontal
                  }/${isVertical() ? item.vertical : item.horizontal}`}
                  alt={`Image ${item._id}`}
                  className="row-item"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="row-wrapper">
        <p className="row-title">VIP शोज़</p>
        <div className="row-container hide-scroll">
          {rowData &&
            vipShows.map((item) => (
              <div key={item._id}>
                <img
                  src={`${
                    isVertical()
                      ? rowData.rootUrlVertical
                      : rowData.rootUrlHorizontal
                  }/${isVertical() ? item.vertical : item.horizontal}`}
                  alt={`Image ${item._id}`}
                  className="row-item"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="row-wrapper">
        <p className="row-title">स्पेशल आपके लिए</p>
        <div className="row-container hide-scroll">
          {rowData &&
            specialShows.map((item) => (
              <div key={item._id}>
                <img
                  src={`${
                    isVertical()
                      ? rowData.rootUrlVertical
                      : rowData.rootUrlHorizontal
                  }/${isVertical() ? item.vertical : item.horizontal}`}
                  alt={`Image ${item._id}`}
                  className="row-item"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
