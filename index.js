// Task 1: Resolve a Promise with a Value
console.log("Resolve a Promise with a Value")
const pr1 = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve("Promise 1 resolved");
            } else {
              reject("Promise 1 rejected");
            }
          }, 1000);
        });

        // console.log(pr1)  //it will returns an object

        pr1.then((result) => {
          console.log(result);
        }); // it will returns result

        // Task 2: Reject a Promise with an Error
            console.log("Reject a Promise with an Error")
        const pr2 = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (!true) {
              resolve("Promise 2 resolved");
            } else {
              reject("Promise 2 rejected");
            }
          }, 1000);
        });

        // console.log(pr2)  //it will returns an object

        pr2.catch((sai) => {
          console.log(sai);
        }); // it will returns result

        // Task 3: Chain Promises
            console.log("Chain Promises")
      function promise4() {
        let pr4 = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve("Promise 4 resolved");
            } else {
              reject("Promise 4 rejected");
            }
          }, 2000);
        });
        return pr4;
      }
      function promise5() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve("Promise 5 resolved");
            } else {
              reject("Promise 5 rejected");
            }
          }, 1500);
        });
      }

      function promise6() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve("Promise 6 resolved");
            } else {
              reject("Promise 6 rejected");
            }
          });
        });
      }
      promise4()
        .then((e) => {
          console.log(e);
          return promise5();
        })
        .then((x) => {
          console.log(x);
          return promise6();
        })
        .then((f) => {
          console.log(f);
        })
        .catch((c) => {
          console.log(c);
        }).finally(()=>{console.log("promise  chain executed with resolve state")})


      //    Task 3: Handle Promise Rejection
            console.log("Handle Promise Rejection")
      function promise7() {
        let pr4 = new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve("Promise 7resolved");
            } else {
              reject("Promise 7 rejected");
            }
          }, 4000);
        });
        return pr4;
      }
      function promise8() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (!true) {
              resolve("Promise 8 resolved");
            } else {
              reject("Promise 8 rejected");
            }
          }, 3000);
        });
      }

      function promise9() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve("Promise 9 resolved");
            } else {
              reject("Promise 9 rejected");
            }
          });
        });
      }
      promise7()
        .then((e) => {
          console.log(e);
          return promise8();
        })
        .then((x) => {
          console.log(x);
          return promise9();
        })
        .then((f) => {
          console.log(f);
        })
        .catch((c) => {
          console.log(c);
        })
        .finally(() => {
          console.log("promise has executed with rejection");
        });
