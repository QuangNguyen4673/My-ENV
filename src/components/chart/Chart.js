import React, { useRef, useEffect, useState } from "react";
import data from "./data.csv";
import * as d3tf from "d3-time-format";
import * as d3 from "d3";
const mockData = [
  {
    sun: "40",
    dateTime: "1995-12-17T18:00:00",
  },
  {
    sun: "0",
    dateTime: "1995-12-17T24:00:00",
  },
  {
    sun: "40",
    dateTime: "1995-12-18T06:00:00",
  },
  {
    sun: "100",
    dateTime: "1995-12-18T12:00:00",
  },
  {
    sun: "40",
    dateTime: "1995-12-18T18:00:00",
  },
  {
    sun: "0",
    dateTime: "1995-12-18T24:00:00",
  },
  {
    sun: "40",
    dateTime: "1995-12-19T06:00:00",
  },
  {
    sun: "100",
    dateTime: "1995-12-19T12:00:00",
  },
  {
    sun: "40",
    dateTime: "1995-12-19T18:00:00",
  },
  {
    sun: "0",
    dateTime: "1995-12-19T24:00:00",
  },
  {
    sun: "40",
    dateTime: "1995-12-20T06:00:00",
  },
  {
    sun: "100",
    dateTime: "1995-12-20T12:00:00",
  },
  {
    sun: "40",
    dateTime: "1995-12-20T18:00:00",
  },
  {
    sun: "0",
    dateTime: "1995-12-20T24:00:00",
  },
];
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

      const formatDateTime = d3.timeFormat("%I:%M %p");
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.dateTime;
          })
        )
        .range([0, innerWidth]);
      /* .tickFormat((d) => {
         
          return formatDateTime(d);
        }); */

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
        .attr("stroke", "orange")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d.dateTime))
            .y((d) => y(d.sun))
            .curve(d3.curveNatural)
        );
    };
    mockData.forEach((d) => {
      d.dateTime = new Date(d.dateTime);
    });
    render(mockData);
  }, [container]);
  return (
    <>
      <div className="weather-chart">
        <svg width="3000" height="400" ref={container}></svg>
      </div>
    </>
  );
}
