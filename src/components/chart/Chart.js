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
      const margin = { top: 30, right: 30, bottom: 30, left: 40 }
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

      const ySun = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.sun
          }),
        ])
        .range([innerHeight, 0])

      const yTide = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function (d) {
            return +d.tide
          }) + 1,
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
            .y1((d) => yTide(d.tide))
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
            .y((d) => ySun(d.sun))
            .curve(d3.curveNatural)
        )
      //Night
      const nightCondition = data.filter(
        (d, i) => +d.sun <= 2 && +data[i + 1]?.sun <= 2
      )
      g.append("g")
        .selectAll("rect")
        .data(nightCondition)
        .join("rect")
        .attr("x", (d) => x(d.dateTime))
        .attr("height", innerHeight)
        .attr("width", innerWidth / (data.length - 1))
        .attr("opacity", 0.1)
      //Title
      const title = g
        .append("g")
        .attr("transform", `translate(${0},${0 - margin.top / 2})`)
      title.append("text").attr("class", "tide").text("Tide")
      title
        .append("circle")
        .attr("r", 5)
        .attr("fill", "rgb(203,203,203)")
        .attr("cx", 40)
        .attr("cy", -5)
      title
        .append("text")
        .attr("class", "sun")
        .attr("x", 50)
        .text("Sunrise & Sunset")
      //Badge
      const badge = g.append("g").selectAll("g").data(data).join("g")
      badge.attr(
        "transform",
        (d) => `translate(${x(d.dateTime)},${yTide(d.tide) - 20})`
      )
      badge.append("rect").attr("class", "badge").attr("ry", "3")
      badge
        .append("text")
        .attr("class", "badge-text")
        .text((d) => d.tide + " m")
        .attr("transform", `translate(2,25)`)
        .style("font-weight", "bold")
        .style("font-size", "1.1rem")
        .style("letter-spacing", "-1")
      badge
        .append("text")
        .attr("class", "badge-text")
        .text((d) => d3.timeFormat("%-I%p")(d.dateTime))
        .attr("transform", "translate(2,45)")
        .style("font-size", "0.9rem")

      const xAxis = d3
        .axisBottom(x)
        .tickFormat((d) => d3.timeFormat("%-I%p")(d))
        .tickSize(0)
        .tickPadding(15)
      const yAxis = d3.axisLeft(yTide).tickSize(0).tickPadding(10)

      g.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis)
      g.append("g").call(yAxis)
    }

    mockData.forEach((d) => {
      d.dateTime = new Date(d.dateTime)
      d.sun = +d.sun
      d.tide = +d.tide
    })
    console.log(mockData)
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
