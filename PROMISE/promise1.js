const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!hasMeeting) {
      const meetingDetails = {
        name: "Technical Meeting",
        location: "Dhaka",
        time: "5.50",
      };
      resolve(meetingDetails);
    } else {
      x = "no data found";
      resolve(x);
    }
  }, 2000);
});

const addToCalender = (meetingDetails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const calender = `name= ${meetingDetails.name} , location=${meetingDetails.location} `;
      resolve(calender);
    }, 1000);
  });
};

meeting.then((res) => {
  console.log(res);
  addToCalender(res).then((calender) => {
    console.log(calender);
  });
});
