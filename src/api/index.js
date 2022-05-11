import axios from "axios"
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

/*
  Function Usage Sample:

  ajax("/api/user/login", "post", {
    data: {}
    params:{}
  }).then(res => {  
    ...
  })
  
*/

const ajax = (url, method, options) => {
  const authToken = localStorage.getItem("authToken") ? localStorage.getItem("authToken") : "";
  if(authToken) {
    const expTime = jwt_decode(authToken).exp * 1000
    const currentTime = new Date().getTime();
    console.log(expTime, currentTime);
  }
  if (options !== undefined) {
    var { params = {}, data = {} } = options
  } else {
    params = data = null
  }
  return new Promise((resolve, reject) => {
    axios({ url, method, params, data }).then(res => {
      resolve(res)
    }, res => {
      reject(res)
    })
  })
}

export default ajax