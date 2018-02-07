const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something failed");
    // resolve("This is my resolved data");
  }, 5000);
});
console.log("before");

promise
  .then(data => {
    console.log(data);
    console.log("after");
  })
  .catch(error => {
    console.log("error", error);
  });
