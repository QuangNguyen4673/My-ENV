import React, { useRef, useEffect, useState } from "react";
import data from "./data.csv";
import * as d3 from "d3";
const mockData = [
  {
    sun: "40",
    dateTime: "18",
  },
  {
    sun: "0",
    dateTime: "24",
  },
  {
    sun: "40",
    dateTime: "6",
  },
  {
    sun: "100",
    dateTime: "12",
  },
  {
    sun: "40",
    dateTime: "18",
  },
  {
    sun: "0",
    dateTime: "24",
  },
];
const exUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";
export default function Chart() {
  const container = useRef(null);
  useEffect(() => {
    const render = (data) => {
      const svg = d3.select(container.current);
      const width = +svg.attr("width");
      const height = +svg.attr("height");
      const margin = { top: 20, right: 30, bottom: 30, left: 60 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.dateTime;
          })
        )
        .range([0, innerWidth]);

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.sun;
          }),
        ])
        .range([innerHeight, 0]);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
      g.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(x));
      g.append("g").call(d3.axisLeft(y));
      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d.date))
            .y((d) => y(d.value))
            .curve(d3.curveNatural)
        );
      /* d3.select("g").remove(); */
    };
    render(mockData);
  }, [container]);
  return (
    <>
      <svg width="800" height="400" ref={container}></svg>
    </>
  );
}
