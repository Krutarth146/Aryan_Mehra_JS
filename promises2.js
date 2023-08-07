console.log("Process Started");

function getPassport(callback) {
  setTimeout(() => {
    const passport = "😶‍🌫️";
    console.log("Here is a Passport", passport);
    callback(passport);
  }, 2000);
}

function getVisa(passport, callback) {
  setTimeout(() => {
    const visa = passport + "👍";
    console.log("Here is a Visa", visa);
    callback(visa);
  }, 2000);
}

// console.clear();
async function ApVisa() {
  const passport = await getPassport();
  console.log("Here is a Passport", passport);

  const visa = await getVisa();
  console.log("Here is a Visa", visa);

  console.log("Process Ended");
}

ApVisa();
