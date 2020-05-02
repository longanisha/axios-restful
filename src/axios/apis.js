import request  from "./http";
import qs  from "qs";
// import base from './baseurl';

export const delCatList =()=> {
    return request('get',"/posts/1" )  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }

  export const delCart =(data)=> {
    return request('delete', "/posts/1")  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }

  export const postCart =(data)=> {
    return request('post', "/posts",data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }



    export const putCart =(data)=> {
    return request('put', "/posts/1",data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }

  export const filterCart =(data)=> {
    //   data = qs.stringify(data)
    return request('get', "/posts/1",data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }