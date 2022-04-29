import React, { useRef, useEffect } from "react"
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

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)

      const xAxis = d3
        .axisBottom(x)
        .tickFormat((d) => d3.timeFormat("%-I%p")(d))
      const yAxis = d3.axisLeft(y)
      g.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis)

      g.append("g").call(yAxis)
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
      const textG = g
        .append("g")
        .attr("x", margin.left)
        .attr("y", 0 - margin.top / 2)
      textG.append("text").attr("class", "foo").text("Tide Sunrise & Sunset")

      textG.append("text").text("hello")

      const foo = d3.select(".foo")
      console.log(foo.attr("width"))
    }
    mockData.forEach((d) => {
      d.dateTime = new Date(d.dateTime)
      console.log(d3.timeFormat("%-I%p")(new Date(d.dateTime)))
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
