const getWeatherStatus = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      status: "Cloudy",
      temp: 29.2,
      humidity: 73,
      psi: 23,
      psiStatus: "Good",
      rain: 0,
    })
  }, 300)
})
export { getWeatherStatus }
