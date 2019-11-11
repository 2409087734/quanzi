import axios from "axios";

//api

let request = axios.create({
  //development:开发环境  production:生产环境
  baseURL: process.env.NODE_ENV === "production" ? "" : "/api",
  timeout: 2000

});

//request axios对象
//yarn
//项目的目录  不能有中文 不能有空格  特殊字符 ~  #  ^

request.interceptors.request.use(function (config) {

  config.headers = {
    // token:

  };
  return config;//配置的错误

});


request.interceptors.response.use(function (res) {

  return res.data;
}, function (error) {
  switch (error.status) {
    case "401":
      break;
    case "422":
      break;
    case "502":
      break;
  }
});

let get = request.get;
let post = request.post;


export {
  get,
  post
}

//async await get (url)
