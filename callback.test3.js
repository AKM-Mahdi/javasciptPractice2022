const payVerify = true;
const marks = 80;
const enroll = (callback) => {
  console.log("enrollment in on process");
  setTimeout(() => {
    if (payVerify) {
      callback();
    } else {
      console.log("payment failed");
    }
  }, 1000);
};
const progress = (callback) => {
  console.log("course on progress");
  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log("Failed");
    }
  }, 1000);
};

const getCertificate = (callback) => {
  setTimeout(() => {
    console.log("congrtz you gott the certificate");
    callback();
  }, 1000);
};

const ex = () => {
  setTimeout(() => {
    console.log(" WHATEVER!!!!!!!!!!");
  }, 1000);
};

enroll(() => {
  progress(() => {
    getCertificate(ex);
  });
});
