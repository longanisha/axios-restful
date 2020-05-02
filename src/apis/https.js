import { tip } from "./util";
import axios from "axios";

const errorHandle = (status, msg) => {
  switch (status) {
    case 400:
      tip(msg);
      break;
    case 404:
      tip(msg);
      break;
      default:
          console.log("no response"+msg);
          
  }
};

var instance = axios.create({baseURL : "https://jsonplaceholder.typicode.com"})
instance.interceptors.response.use((response)=>{
    return response
},(error)=>{const {response} = error
if(response){
    errorHandle(response.status,response.data.error)
    return Promise.reject(error)
}else {
    if(!window.navigator.onLine){
        tip("no internet")
    }else{
        return Promise.reject(error)
    }
}
})

export default function(method, url, data=null){
    method = method.toLowerCase()
    if(method == "post"){
        return instance.post(url, data)
    }else if(method ==" get"){
        return instance.get(url,{params:data})
    }else{
        console.log("unknow method");
        return false
        
    }
}