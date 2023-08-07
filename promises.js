const ticket = new Promise(function (resolve, reject) {
    const isBoarded = true;
  
    if (isBoarded) {
      resolve("You are not in the flight");
    } else {
      reject("Your flight has been Cancelled");
    }
  });
  
  ticket
    .then((data) => {
      console.log("Yesssss", data);
    })
    .catch((data) => {
      console.log("oh Nooo", data);
    })
    .finally((data) => {
      console.log("Always Executed!");
    });
  