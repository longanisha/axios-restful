import axios from "axios";
import base from "./baseurl";
// import store from '../vuex/store'
import { Message } from "element-ui";
import qs from "qs";
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// POST传参序列化
axios.interceptors.request.use(
  config => {
   
    // 单个网站的admin用户
    //   config.headers.common['Gw-Admin-Access-Token'] = store.getters.adminAccessToken
    // 整个网点user
    //   config.headers.common['Gw-User-Access-Token'] = store.getters.userAccessToken
    return config;
  },
  err => {
    Message.error("参数错误");
    return Promise.reject(err);
  }
);

// 返回状态判断
axios.interceptors.response.use(
  res => {
    const response = res.data;
    if (response.msg) {
      if (response.code === 0) {
        Message.success(response.msg);
      } else {
        Message.error(response.msg);
      }
    }
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 401:
          Message.error("未授权，请登录");
          window.location.href = "/#/auth/login";
          break;
        case 404:
          Message.error(
            "接口请求异常: " + err.response.config.url + ", 请重试"
          );
          break;
        default:
          Message.error("Oops, 出错啦");
      }
    }
    return Promise.reject(err);
  }
);

export default function request(method, url, data) {
  // method = method.toLowerCase()
 
  // 处理请求的url和数据
  if (method == "get") {
    if(data){
      Object.getOwnPropertyNames(data).forEach(function (key) {
        // console.log(typeof data[key]);
    
        if (key == "query") {
          var newArr = []; //新建一个数组
          for (var x in data[key]) {
            //遍历出对象中的所有属性
            newArr.push(x + ":" + data[key][x]); //将遍历出来的属性及其对应的属性值用'='号拼接，并放入新建的数组中
          }
          data[key] = newArr.join(",");
          console.log(data[key]);
        }
        console.log(data);
    
        return data;
      });
      data = { params: data };
    }
   
    
  } else {
    data = data;
  }
  // data = method === 'get' ? { params: data } : data
  // 发送请求
  return new Promise((resolve, reject) => {
    axios[method](base.sq + url, data)
      .then(
        response => {
          resolve(response);
        },
        error => {
          reject(error);
        }
      )
      .catch(error => {
        reject(error);
      });
  }).catch(error => {
    console.log(error);
  });
}
