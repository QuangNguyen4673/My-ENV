import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import moonIcon from "../../assets/Images/moon.svg"
import { dateMonth } from "../../utils"
import { getWeatherData } from "../../services/weather"

export default function Chart() {
  const container = useRef(null)
  const _getWeatherData = async () => {
    const weatherData = await getWeatherData
    return weatherData
  }
  useEffect(() => {
    const render = async () => {
      const data = await _getWeatherData()
      data.forEach((d) => {
        d.dateTime = new Date(d.dateTime)
        d.sun = +d.sun
        d.tide = +d.tide
      })
      const svg = d3.select(container.current)
      const width = +svg.attr("width")
      const height = +svg.attr("height")
      const margin = { top: 30, right: 30, bottom: 0, left: 0 }
      const innerWidth = width - margin.left - margin.right
      const innerHeight = height - margin.top - margin.bottom

      const initScrollLeft = 420
      const xBarHeight = 40
      const indexInData = (scrollPos = 0) => {
        const bisect = d3.bisector((d) => d.dateTime).left
        let x0 = x.invert(scrollPos + initScrollLeft)
        return bisect(data, x0, 1)
      }
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
          2,
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

      //Tide area
      g.append("path")
        .datum(data.filter((d) => d.tide))
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
      //Sun path
      g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("stroke-width", 1.5)
        .style("stroke-dasharray", "3, 3")
        .attr(
          "d",
          d3
            .line()
            .x((d) => x(d.dateTime))
            .y((d) => ySun(d.sun))
            .curve(d3.curveNatural)
        )
      //Night rect
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
      const badge = g
        .append("g")
        .selectAll("g")
        .data(data.filter((d) => d.tide))
        .join("g")
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
      //Axis
      const xAxis = d3
        .axisBottom(x)
        .tickFormat((d) => d3.timeFormat("%-I%p")(d))
        .tickSize(0)
        .tickPadding(15)
      const yAxis = d3
        .axisLeft(yTide)

        .tickSize(0)
        .tickPadding(10)
      //Moving sun
      //Sun style
      const movingObject = g
        .append("g")
        .selectAll("circle")
        .data([null, null])
        .join("circle")
        .style("fill", (d, i) => (i === 0 ? "orange" : "none"))
        .attr("r", (d, i) => (i === 0 ? 8 : 12))
        .attr("cx", x(data[indexInData()].dateTime))
        .attr("cy", ySun(data[indexInData()].sun))
        .attr("stroke", "orange")
        .attr("stroke-width", "2px")
        .attr("stroke-dasharray", (d, i) => i === 1 && "2,7.4")

      g.append("rect")
        .style("fill", "none")
        .style("pointer-events", "all")
        .attr("width", width)
        .attr("height", height)

      const xBar = g
        .append("g")
        .attr("transform", `translate(0, ${innerHeight - xBarHeight})`)
      xBar
        .append("rect")
        .attr("width", innerWidth)
        .attr("height", xBarHeight)
        .attr("fill", "rgb(232,242,254)")

      // add important text
      const DayNightTime = data.filter(
        (d, i) =>
          (d.sun <= 2 && data[i - 1].sun >= 2) ||
          (d.sun <= 2 && data[i + 1]?.sun >= 2)
      )
      xBar
        .selectAll("text")
        .data(DayNightTime)
        .join("text")
        .text((d) => d3.timeFormat("%-I:%M%p")(d.dateTime))
        .attr("x", (d, i) => x(d.dateTime))
        .attr("fill", "orange")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "text-before-edge")

      //Moving indicator
      const xBarIndicatorG = xBar
        .append("g")
        .attr("transform", `translate(${x(data[indexInData()].dateTime)},0)`)

      //add triangle
      xBarIndicatorG
        .append("path")
        .attr("d", d3.symbol().type(d3.symbolTriangle).size(100))
        .attr("fill", "rgb(232,242,254)")
      //add bottom text
      const xBarBottomText = xBarIndicatorG
        .append("text")
        .text(d3.timeFormat("%-I:%M%p")(data[indexInData()].dateTime))
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "text-before-edge")
      //add top text
      const xBarTopText = xBarIndicatorG
        .append("text")
        .attr("y", xBarHeight - innerHeight)
        .text(dateMonth(data[indexInData()].dateTime))
        .attr("class", "top-text")
        .attr("text-anchor", "middle")

      //add Moon
      const moonWidth = 30
      const moon = xBarIndicatorG
        .append("image")
        .attr("xlink:href", moonIcon)
        .attr("width", moonWidth)
        .attr("y", 100 + xBarHeight - innerHeight)
        .attr("x", -moonWidth / 2)
        .attr("opacity", 0)

      const xBarIndicatorLineG = xBarIndicatorG.append("g")
      const linearGradient = xBarIndicatorLineG
        .append("defs")
        .append("linearGradient")
        .attr("id", "e")
        .attr("x1", "0")
        .attr("y1", "0")
        .attr("x2", "0%")
        .attr("y2", "100%")
        .attr("gradientUnits", "userSpaceOnUse")

      linearGradient
        .append("stop")
        .attr("stop-color", "rgb(232, 228, 227)")
        .attr("offset", "0")
      linearGradient
        .append("stop")
        .attr("stop-color", "red")
        .attr("offset", "1")

      xBarIndicatorLineG
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", -100)
        .attr("stroke", "url(#e)")
        .attr("stroke-width", 1)

      let lastKnownScrollPosition = 0
      let ticking = false

      function setSunPosition(scrollPos) {
        let i = indexInData(scrollPos)
        let selectedData = data[i]
        xBarIndicatorG.attr(
          "transform",
          `translate(${x(selectedData.dateTime)},0)`
        )
        xBarBottomText.text(d3.timeFormat("%-I:%M%p")(selectedData.dateTime))
        xBarTopText.text(dateMonth(selectedData.dateTime))
        if (selectedData.sun <= 2) {
          moon.attr("opacity", "1")
        } else {
          moon.attr("opacity", "0")
        }
        movingObject
          .attr("cx", x(selectedData.dateTime))
          .attr("cy", ySun(selectedData.sun))
      }
      const weatherChart = document.querySelector(".weather-chart")

      weatherChart.addEventListener("scroll", function (e) {
        lastKnownScrollPosition = weatherChart.scrollLeft
        setSunPosition(lastKnownScrollPosition)
      })

      g.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis)
      g.append("g").call(yAxis).attr("class", "helllo")
    }
    render()
  }, [container])

  return (
    <>
      <div className="weather-chart" data-testid="weather-chart">
        <svg
          data-testid="weather-chart-svg"
          width="8000"
          height="500"
          ref={container}
        ></svg>
      </div>
    </>
  )
}
