console.log("Process Started");

function getPassport() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const passport = '👌';
      resolve(passport);
    }, 2000);
  })
}

function getVisa(passport) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const visa = passport + '🤣';
      // resolve(visa)
      reject(visa)
    },2000);
  })
}

// console.clear();
async function ApVisa() {

  try{
    const passport = await getPassport();
    console.log("Here is a Passport", passport);

    const visa = await getVisa();
    console.log("Here is a Visa", visa);
  }
  
  catch(err)
  {
    console.log("Error Occured",err);
  }
  console.log("Process Ended");
  
}

ApVisa();

