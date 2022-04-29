import React, { useRef, useEffect } from "react"
import * as d3tf from "d3-time-format"
import * as d3 from "d3"
const mockData = [
  {
    sun: "2",
    tide: "2.3",
    dateTime: "1995-12-17T18:00:00",
  },
  {
    sun: "0",
    tide: "3.1",
    dateTime: "1995-12-17T24:00:00",
  },
  {
    sun: "2",
    tide: "2.2",
    dateTime: "1995-12-18T06:00:00",
  },
  {
    sun: "5",
    tide: "3.1",
    dateTime: "1995-12-18T12:00:00",
  },
  {
    sun: "2",
    tide: "2.0",
    dateTime: "1995-12-18T18:00:00",
  },
  {
    sun: "0",
    tide: "3.1",
    dateTime: "1995-12-18T24:00:00",
  },
  {
    sun: "2",
    tide: "2.2",
    dateTime: "1995-12-19T06:00:00",
  },
  {
    sun: "5",
    tide: "3.3",
    dateTime: "1995-12-19T12:00:00",
  },
  {
    sun: "2",
    tide: "2.0",
    dateTime: "1995-12-19T18:00:00",
  },
  {
    sun: "0",
    tide: "3.1",
    dateTime: "1995-12-19T24:00:00",
  },
  {
    sun: "2",
    tide: "2.3",
    dateTime: "1995-12-20T06:00:00",
  },
  {
    sun: "5",
    tide: "3.0",
    dateTime: "1995-12-20T12:00:00",
  },
  {
    sun: "2",
    tide: "2.1",
    dateTime: "1995-12-20T18:00:00",
  },
  {
    sun: "0",
    tide: "3.0",
    dateTime: "1995-12-20T24:00:00",
  },
]

export default function Chart() {
  const container = useRef(null)
  useEffect(() => {
    const render = (data) => {
      const svg = d3.select(container.current)
      const width = +svg.attr("width")
      const height = +svg.attr("height")
      const margin = { top: 30, right: 30, bottom: 30, left: 30 }
      const innerWidth = width - margin.left - margin.right
      const innerHeight = height - margin.top - margin.bottom
      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, function (d) {
            return d.dateTime
          })
        )
        .range([0, innerWidth])

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.sun
          }),
        ])
        .range([innerHeight, 0])

      //Tide
      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("class", "tide")
        .attr(
          "d",
          d3
            .area()
            .x((d) => x(d.dateTime))
            .y0(innerHeight)
            .y1((d) => y(d.tide))
            .curve(d3.curveBasis)
        )
      //Sun
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
        )
      //Night

      g.append("g")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", (d, i) => {
          if (+data[i].sun <= 2 && +data[i + 1]?.sun <= 2) {
            return x(d.dateTime)
          }
        })
        .attr("y", 0)
        .attr("height", innerHeight)
        .attr("width", "100")
      //Title
      const title = g.append("g")
      title
        .append("text")
        .attr("class", "tide")
        .attr("x", 0)
        .attr("y", 0 - margin.top / 2)
        .text("Tide")
      title
        .append("path")
        .attr("d", d3.symbol())
        .attr("fill", "rgb(203,203,203)")
        .attr("transform", "translate(40,-20)")
      title
        .append("text")
        .attr("class", "sun")
        .attr("x", 50)
        .attr("y", 0 - margin.top / 2)
        .text("Sunrise & Sunset")
      //Badge
      g.append("g")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", "badge")
        .attr("x", (d) => x(d.dateTime))
        .attr("y", (d) => y(d.tide))
        .attr("ry", "3")
        .attr("ry", "3")
        .attr("transform", "translate(-5,-25)")
      g.append("g")
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("class", "badge-text")
        .attr("x", (d) => x(d.dateTime))
        .attr("y", (d) => y(d.tide))
        .text((d) => d.tide + " m")
        .style("font-weight", "bold")
        .style("font-size", "1.1rem")
        .style("letter-spacing", "-2")
      g.append("g")
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("class", "badge-text")
        .attr("x", (d) => x(d.dateTime))
        .attr("y", (d) => y(d.tide))
        .text((d) => d3.timeFormat("%-I%p")(d.dateTime))
        .attr("transform", "translate(0,18)")
        .style("font-size", "0.9rem")

      const xAxis = d3
        .axisBottom(x)
        .tickFormat((d) => d3.timeFormat("%-I%p")(d))
      const yAxis = d3.axisLeft(y)

      g.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis)
      g.append("g").call(yAxis)
    }

    mockData.forEach((d) => {
      d.dateTime = new Date(d.dateTime)
      /*  d.sun = +d.sun
      d.sun = +d.tide */
    })
    render(mockData)
  }, [container])
  return (
    <>
      <div className="weather-chart">
        <svg width="3000" height="400" ref={container}></svg>
      </div>
    </>
  )
}
