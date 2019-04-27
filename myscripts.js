

/*
//PROMISE 1 EXAMPLE

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  let isClean = false;

  if (isClean) {
    resolve("Clean");
  } else {
    reject("not Clean");
  }
});

promiseToCleanTheRoom
  .then(function(fromResolve) {
    console.log("the room is" + fromResolve);
  })
  .catch(function(fromReject) {
    console.log("the room is" + fromReject);
  });

  */


/*
Assessment Example 2
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("Cleaned The Room");
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " remove Garbage");
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " won Icecream");
  });
};

cleanRoom()
  .then(function(result) {
    return removeGarbage(result);
  })
  .then(function(result) {
    return winIcecream(result);
  })
  .then(function(result) {
    //runs when all 3 promises are done
    console.log("finished " + result);
  });
*/
/*
//Promise Function 3
var isMomHappy = true;

var willlIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone); //fulfilled
  } else {
    var reason = new Error("mom is not happy");
    reject(reason); //reject
  }
});


var askMom = function() {
  willlIGetNewPhone
    .then(function(fullfilled) {
      //yah, you got a new phone
      console.log(fullfilled);
      //output: {brand: 'Samsung', color:'black}
    })
    .catch(function(error) {
      //oops, mom don't buy it
      console.log(error.message);
      //output: 'mom is not happy'
    });
};
askMom();
*/