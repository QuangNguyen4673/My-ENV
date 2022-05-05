//12 13:30 15 16:30 18 19:30 21 22:30 24 1:30 3 4:30 6 7:30 9 10:30
const mockData = [
  {
    sun: "2.2",
    tide: "2.3",
    dateTime: "1995-12-17T18:00:00", //
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-17T19:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-17T21:00:00",
  },
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-17T22:30:00",
  },
  //17
  {
    sun: "0.8",
    tide: "3.1",
    dateTime: "1995-12-17T24:00:00", //
  },
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-18T01:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-18T03:00:00",
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-18T04:30:00",
  },
  {
    sun: "2.2",
    tide: "2.2",
    dateTime: "1995-12-18T06:00:00", //
  },
  {
    sun: "2.6",
    tide: "",
    dateTime: "1995-12-18T07:30:00",
  },
  {
    sun: "3",
    tide: "",
    dateTime: "1995-12-18T09:00:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-18T10:30:00",
  },
  {
    sun: "3.6",
    tide: "3.1",
    dateTime: "1995-12-18T12:00:00", //
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-18T13:30:00",
  },
  {
    sun: "3",
    tide: "",
    dateTime: "1995-12-18T15:00:00",
  },
  {
    sun: "2.6",
    tide: "",
    dateTime: "1995-12-18T16:30:00",
  },
  {
    sun: "2.2",
    tide: "2.0",
    dateTime: "1995-12-18T18:00:00", //
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-18T19:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-18T21:00:00",
  },
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-18T22:30:00",
  },
  {
    sun: "0.8",
    tide: "3.1",
    dateTime: "1995-12-18T24:00:00", //
  },
  //19
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-19T01:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-19T03:00:00",
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-19T04:30:00",
  },
  {
    sun: "2.2",
    tide: "2.2",
    dateTime: "1995-12-19T06:00:00", //
  },
  {
    sun: "2.6",
    tide: "",
    dateTime: "1995-12-19T07:30:00",
  },
  {
    sun: "3",
    tide: "",
    dateTime: "1995-12-19T09:00:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-19T10:30:00",
  },
  {
    sun: "3.6",
    tide: "3.1",
    dateTime: "1995-12-19T12:00:00", //
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-19T13:30:00",
  },
  {
    sun: "3",
    tide: "",
    dateTime: "1995-12-19T15:00:00",
  },
  {
    sun: "2.6",
    tide: "",
    dateTime: "1995-12-19T16:30:00",
  },
  {
    sun: "2.2",
    tide: "2.0",
    dateTime: "1995-12-19T18:00:00", //
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-19T19:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-19T21:00:00",
  },
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-19T22:30:00",
  },
  {
    sun: "0.8",
    tide: "3.1",
    dateTime: "1995-12-19T24:00:00", //
  },
  //20
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-20T01:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-20T03:00:00",
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-20T04:30:00",
  },
  {
    sun: "2.2",
    tide: "2.2",
    dateTime: "1995-12-20T06:00:00", //
  },
  {
    sun: "2.6",
    tide: "",
    dateTime: "1995-12-20T07:30:00",
  },
  {
    sun: "3",
    tide: "",
    dateTime: "1995-12-20T09:00:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-20T10:30:00",
  },
  {
    sun: "3.6",
    tide: "3.1",
    dateTime: "1995-12-20T12:00:00", //
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-20T13:30:00",
  },
  {
    sun: "3",
    tide: "",
    dateTime: "1995-12-20T15:00:00",
  },
  {
    sun: "2.6",
    tide: "",
    dateTime: "1995-12-20T16:30:00",
  },
  {
    sun: "2.2",
    tide: "2.0",
    dateTime: "1995-12-20T18:00:00", //
  },
  {
    sun: "1.8",
    tide: "",
    dateTime: "1995-12-20T19:30:00",
  },
  {
    sun: "1.4",
    tide: "",
    dateTime: "1995-12-20T21:00:00",
  },
  {
    sun: "1",
    tide: "",
    dateTime: "1995-12-20T22:30:00",
  },
  {
    sun: "0.8",
    tide: "3.1",
    dateTime: "1995-12-20T24:00:00", //
  },
]

export default mockData
