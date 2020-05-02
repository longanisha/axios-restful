import request  from "./http";
import qs  from "qs";
// import base from './baseurl';

 const delCatList =(url,data)=> {
    return request('get',"/posts/"+url )  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }

   const delCart =(url,data)=> {
    return request('delete', "/posts/"+url,data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }

   const postCart =(data)=> {
    return request('post', "/posts",data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }



     const putCart =(data)=> {
    return request('put', "/posts/1",data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }

   const filterCart =(data)=> {
    //   data = qs.stringify(data)
    return request('get', "/posts/1",data)  //其它的操作将对应的delete换成（put、post、get、delete）即可
  }
  const apiList = {
 
    delCatList,
    delCart,
    postCart,
    putCart,
    filterCart
  }

  export default apiList