/**
 * Write utility that will GET a record from REST API endpoint, perform some operations to data,
   then PUT the processed data to same endpoint.
   It should be possible to provide an array of record IDs that need to be processed. There should
   be a way to specify the max number of concurrent connections for both GET and PUT URLs.
   Example:
   const utility = new Utility({
    url: '/api/records/',
    maxGet: 10,
    maxPut: 2,
    processFn: function(data){
        data.processed = true;
        return data;
    }
   })

   BEFORE SOLVING PROBLEM READ /js-common/promises.js
 */

//////////////////////////////////////////// PARALLEL API CALLS  //////////////////////////////////////////////////////////////////////////
// the following code contains an API call in an async function.

// const callAPI = async () => {             <-- if you use fetch you need to await twice, instead use axios
//   const response = await fetch("https://reqres.in/api/users/2");
//   console.log(await response.json());
// };

const axios = require("axios");
const callAPI = async () => {
  //<-- ALWAYS ALWAYS USE try...catch with promises -->
  try {
    const response = await axios.get("https://reqres.in/api/users/2");
    const { data: user } = response.data;
    console.log(user);
  } catch (error) {
    console.log(`error occurred callAPI ${error}`);
  }
};

//callAPI();

// If we wanted to call two APIs then we could do the following.
const callMultipleAPI = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/2");
    const response2 = await axios.get("https://reqres.in/api/users/3");

    console.log(response.data);
    console.log(response2.data);
  } catch (error) {
    console.log(`error occurred in call2API ${error}`);
  }
};

// callMultipleAPI();

// However because both API calls are being immediately awaited, this will result in the execution of the function stopping while it waits for the result of the first API call before making the second.
// As we don't need that response to make the second API call, we can improve the performance of the code by moving the await keywords to the point we actually need the responses.
const callMultipleAPIParallel = async () => {
  try {
    // in following statements we are not awaiting on get requests
    const responsePromise = axios.get("https://reqres.in/api/users/2");
    const response2Promise = axios.get("https://reqres.in/api/users/3"); // <--try to put random url, you get just the error message even though rest of the APIs are successful
    const response3Promise = axios.get("https://reqres.in/api/users/4");

    // we are using promise.all to run all requests in parallel
    const results = await Promise.all([
      responsePromise,
      response2Promise,
      response3Promise,
    ]);

    for (const result of results) {
      console.log(result.data);
    }
  } catch (error) {
    console.log(`error occurred in call2APIParallel ${error}`);
  }
};

// callMultipleAPIParallel();

const callMultipleAPIParallelV2 = async () => {
  try {
    const responsePromise = axios.get("https://reqres.in/api/users/2");
    const response2Promise = axios.get("https://reqres.in/api/users/3"); // <-- try to put random url, now you will get error for this and success message of other apis
    const response3Promise = axios.get("https://reqres.in/api/users/4");

    const results = await Promise.allSettled([
      responsePromise,
      response2Promise,
      response3Promise,
    ]);

    for (const result of results) {
      if (result.status === "fulfilled") {
        console.log(result.value.data); // Accessing `data` from `value`
      } else {
        console.error(`${result.reason.config.url} promises was rejected.`);
        // more info
        // console.error(`reason ${result.reason}`)
      }
    }
  } catch (error) {
    console.log(`error occurred in call2APIParallelV2 ${error}`);
  }
};

// callMultipleAPIParallelV2();

//////////////////////////////////////////// SOLUTION TO PROBLEM  //////////////////////////////////////////////////////////////////////////

class Utility {
  constructor({ url, maxGet, maxPut, processFn }) {
    this.url = url;
    this.maxGet = maxGet;
    this.maxPut = maxPut;
    this.processFn = processFn;
  }

  async start(ids) {
    // find total batches
    const batches = ids.length / this.maxGet;
    let counter = 0;

    // for each batch call get with max concurrent request
    for (let i = 0; i < batches; i++) {
      try {
        const batchPromises = [];
        console.log(`batch #${i + 1} started.`);
        for (let j = 0; j < this.maxGet && counter < ids.length; j++) {
          batchPromises.push(axios.get(`${this.url}/${ids[counter]}`));
          counter++;
        }

        const results = await Promise.allSettled(batchPromises);

        for (const result of results) {
          if (result.status == "fulfilled") {
            console.log(`result: `, result.value.data);
          } else {
            console.log(`called failed for `, result.reason.config.url);
          }
        }
      } catch (error) {
        console.error(`error while calling apis of batch #${i + 1}`);
      }
    }
  }
}

const utility = new Utility({
  url: "https://reqres.in/api/users",
  maxGet: 2,
  maxPut: 2,
  processFn: function (data) {
    data.processed = true;
    return data;
  },
});
const arrayOf10Ids = Array.from({ length: 10 }, (_, index) => index + 1);
utility.start(arrayOf10Ids);
