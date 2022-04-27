import React, { useRef, useEffect, useState } from "react";
import data from "./data.csv";
import * as d3 from "d3";
const mockData = [
  {
    date: "2013-04-28",
    value: "135.98",
  },
  {
    date: "2014-10-23",
    value: "385.05",
  },
  {
    date: "2015-02-26",
    value: "237.71",
  },
  {
    date: "2017-02-05",
    value: "1043.63",
  },
];
const exUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";
export default function Chart() {
  const container = useRef(null);
  useEffect(() => {
    const render = (data) => {
      const margin = { top: 10, right: 30, bottom: 30, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;
      const svg = d3
        .select(container.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.date;
          })
        )
        .range([0, width]);

      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
      // Add Y axis
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.value;
          }),
        ])
        .range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d.date))
            .y((d) => y(d.value))
        );
    };
    mockData.forEach((d) => {
      d.date = d3.timeParse("%Y-%m-%d")(d.date);
      d.value = +d.value;
    });
    console.log(mockData);
    render(mockData);
  }, [container]);
  return (
    <>
      <div ref={container}></div>;
    </>
  );
}
