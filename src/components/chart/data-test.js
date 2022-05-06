//12 13:30 15 16:30 18 19:30 21 22:30 24 1:30 3 4:30 6 7:30 9 10:30
const mockData = [
  {
    sun: "3.1",
    tide: "2.2",
    dateTime: "1995-12-16T24:00:00",
  },
  //17
  {
    sun: "3.1",
    tide: "",
    dateTime: "1995-12-17T00:30:00",
  },
  {
    sun: "3.2",
    tide: "",
    dateTime: "1995-12-17T01:00:00",
  },
  {
    sun: "3.3",
    tide: "",
    dateTime: "1995-12-17T01:30:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-17T02:00:00",
  },
  {
    sun: "3.5",
    tide: "",
    dateTime: "1995-12-17T02:30:00",
  },
  {
    sun: "3.6",
    tide: "",
    dateTime: "1995-12-17T03:00:00",
  },
  {
    sun: "3.7",
    tide: "",
    dateTime: "1995-12-17T03:30:00",
  },
  {
    sun: "3.8",
    tide: "",
    dateTime: "1995-12-17T04:00:00",
  },
  {
    sun: "3.9",
    tide: "",
    dateTime: "1995-12-17T04:30:00",
  },
  {
    sun: "4",
    tide: "",
    dateTime: "1995-12-17T05:00:00",
  },
  {
    sun: "4.1",
    tide: "",
    dateTime: "1995-12-17T05:30:00",
  },
  {
    sun: "4.2",
    tide: "3.1",
    dateTime: "1995-12-17T06:00:00", //
  },
  {
    sun: "4.3",
    tide: "",
    dateTime: "1995-12-17T06:30:00",
  },
  {
    sun: "4.4",
    tide: "",
    dateTime: "1995-12-17T07:00:00",
  },
  {
    sun: "4.5",
    tide: "",
    dateTime: "1995-12-17T07:30:00",
  },
  {
    sun: "4.6",
    tide: "",
    dateTime: "1995-12-17T08:00:00",
  },
  {
    sun: "4.7",
    tide: "",
    dateTime: "1995-12-17T08:30:00",
  },
  {
    sun: "4.8",
    tide: "",
    dateTime: "1995-12-17T09:00:00",
  },
  {
    sun: "4.9",
    tide: "",
    dateTime: "1995-12-17T09:30:00",
  },
  {
    sun: "5",
    tide: "",
    dateTime: "1995-12-17T10:00:00",
  },
  {
    sun: "5.1",
    tide: "",
    dateTime: "1995-12-17T10:30:00",
  },
  {
    sun: "5.2",
    tide: "",
    dateTime: "1995-12-17T11:00:00",
  },
  {
    sun: "5.3",
    tide: "",
    dateTime: "1995-12-17T11:30:00",
  },
  {
    sun: "5.3",
    tide: "2.1",
    dateTime: "1995-12-17T12:00:00", //
  },
  {
    sun: "5.3",
    tide: "",
    dateTime: "1995-12-17T12:30:00",
  },
  {
    sun: "5.2",
    tide: "",
    dateTime: "1995-12-17T13:00:00",
  },
  {
    sun: "5.1",
    tide: "",
    dateTime: "1995-12-17T13:30:00",
  },
  {
    sun: "5",
    tide: "",
    dateTime: "1995-12-17T14:00:00",
  },
  {
    sun: "4.9",
    tide: "",
    dateTime: "1995-12-17T14:30:00",
  },
  {
    sun: "4.8",
    tide: "",
    dateTime: "1995-12-17T15:00:00",
  },
  {
    sun: "4.7",
    tide: "",
    dateTime: "1995-12-17T15:30:00",
  },
  {
    sun: "4.6",
    tide: "",
    dateTime: "1995-12-17T16:00:00",
  },
  {
    sun: "4.5",
    tide: "",
    dateTime: "1995-12-17T16:30:00",
  },
  {
    sun: "4.4",
    tide: "",
    dateTime: "1995-12-17T17:00:00",
  },
  {
    sun: "4.3",
    tide: "",
    dateTime: "1995-12-17T17:30:00",
  },
  {
    sun: "4.2",
    tide: "3.3",
    dateTime: "1995-12-17T18:00:00", //
  },
  {
    sun: "4.1",
    tide: "",
    dateTime: "1995-12-17T18:30:00",
  },
  {
    sun: "4",
    tide: "",
    dateTime: "1995-12-17T19:00:00",
  },
  {
    sun: "3.9",
    tide: "",
    dateTime: "1995-12-17T19:30:00",
  },
  {
    sun: "3.8",
    tide: "",
    dateTime: "1995-12-17T20:00:00",
  },
  {
    sun: "3.7",
    tide: "",
    dateTime: "1995-12-17T20:30:00",
  },
  {
    sun: "3.6",
    tide: "",
    dateTime: "1995-12-17T21:00:00",
  },
  {
    sun: "3.5",
    tide: "",
    dateTime: "1995-12-17T21:30:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-17T22:00:00",
  },
  {
    sun: "3.3",
    tide: "",
    dateTime: "1995-12-17T22:30:00",
  },
  {
    sun: "3.2",
    tide: "",
    dateTime: "1995-12-17T23:00:00",
  },
  {
    sun: "3.1",
    tide: "",
    dateTime: "1995-12-17T23:30:00",
  },
  {
    sun: "3.1",
    tide: "2",
    dateTime: "1995-12-17T24:00:00", //
  },

  //18
  {
    sun: "3.1",
    tide: "",
    dateTime: "1995-12-18T00:30:00",
  },
  {
    sun: "3.2",
    tide: "",
    dateTime: "1995-12-18T01:00:00",
  },
  {
    sun: "3.3",
    tide: "",
    dateTime: "1995-12-18T01:30:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-18T02:00:00",
  },
  {
    sun: "3.5",
    tide: "",
    dateTime: "1995-12-18T02:30:00",
  },
  {
    sun: "3.6",
    tide: "",
    dateTime: "1995-12-18T03:00:00",
  },
  {
    sun: "3.7",
    tide: "",
    dateTime: "1995-12-18T03:30:00",
  },
  {
    sun: "3.8",
    tide: "",
    dateTime: "1995-12-18T04:00:00",
  },
  {
    sun: "3.9",
    tide: "",
    dateTime: "1995-12-18T04:30:00",
  },
  {
    sun: "4",
    tide: "",
    dateTime: "1995-12-18T05:00:00",
  },
  {
    sun: "4.1",
    tide: "",
    dateTime: "1995-12-18T05:30:00",
  },
  {
    sun: "4.2",
    tide: "2.1",
    dateTime: "1995-12-18T06:00:00", //
  },
  {
    sun: "4.3",
    tide: "",
    dateTime: "1995-12-18T06:30:00",
  },
  {
    sun: "4.4",
    tide: "",
    dateTime: "1995-12-18T07:00:00",
  },
  {
    sun: "4.5",
    tide: "",
    dateTime: "1995-12-18T07:30:00",
  },
  {
    sun: "4.6",
    tide: "",
    dateTime: "1995-12-18T08:00:00",
  },
  {
    sun: "4.7",
    tide: "",
    dateTime: "1995-12-18T08:30:00",
  },
  {
    sun: "4.8",
    tide: "",
    dateTime: "1995-12-18T09:00:00",
  },
  {
    sun: "4.9",
    tide: "",
    dateTime: "1995-12-18T09:30:00",
  },
  {
    sun: "5",
    tide: "",
    dateTime: "1995-12-18T10:00:00",
  },
  {
    sun: "5.1",
    tide: "",
    dateTime: "1995-12-18T10:30:00",
  },
  {
    sun: "5.2",
    tide: "",
    dateTime: "1995-12-18T11:00:00",
  },
  {
    sun: "5.3",
    tide: "",
    dateTime: "1995-12-18T11:30:00",
  },
  {
    sun: "5.3",
    tide: "3.1",
    dateTime: "1995-12-18T12:00:00", //
  },
  {
    sun: "5.3",
    tide: "",
    dateTime: "1995-12-18T12:30:00",
  },
  {
    sun: "5.2",
    tide: "",
    dateTime: "1995-12-18T13:00:00",
  },
  {
    sun: "5.1",
    tide: "",
    dateTime: "1995-12-18T13:30:00",
  },
  {
    sun: "5",
    tide: "",
    dateTime: "1995-12-18T14:00:00",
  },
  {
    sun: "4.9",
    tide: "",
    dateTime: "1995-12-18T14:30:00",
  },
  {
    sun: "4.8",
    tide: "",
    dateTime: "1995-12-18T15:00:00",
  },
  {
    sun: "4.7",
    tide: "",
    dateTime: "1995-12-18T15:30:00",
  },
  {
    sun: "4.6",
    tide: "",
    dateTime: "1995-12-18T16:00:00",
  },
  {
    sun: "4.5",
    tide: "",
    dateTime: "1995-12-18T16:30:00",
  },
  {
    sun: "4.4",
    tide: "",
    dateTime: "1995-12-18T17:00:00",
  },
  {
    sun: "4.3",
    tide: "",
    dateTime: "1995-12-18T17:30:00",
  },
  {
    sun: "4.2",
    tide: "2.1",
    dateTime: "1995-12-18T18:00:00",
  },
  {
    sun: "4.1",
    tide: "",
    dateTime: "1995-12-18T18:30:00",
  },
  {
    sun: "4",
    tide: "",
    dateTime: "1995-12-18T19:00:00",
  },
  {
    sun: "3.9",
    tide: "",
    dateTime: "1995-12-18T19:30:00",
  },
  {
    sun: "3.8",
    tide: "",
    dateTime: "1995-12-18T20:00:00",
  },
  {
    sun: "3.7",
    tide: "",
    dateTime: "1995-12-18T20:30:00",
  },
  {
    sun: "3.6",
    tide: "",
    dateTime: "1995-12-18T21:00:00",
  },
  {
    sun: "3.5",
    tide: "",
    dateTime: "1995-12-18T21:30:00",
  },
  {
    sun: "3.4",
    tide: "",
    dateTime: "1995-12-18T22:00:00",
  },
  {
    sun: "3.3",
    tide: "",
    dateTime: "1995-12-18T23:30:00",
  },
  {
    sun: "3.2",
    tide: "3.1",
    dateTime: "1995-12-18T24:00:00", //
  },
]
export default mockData
