<template>
  <div>
    <button @click="a">get方法</button>
    <button @click="b">del方法</button>
    <button @click="c">post方法</button>
    <button @click="d">put方法</button>
    <button @click="e">筛选方法</button>
  </div>
</template>

<script>
// import {apigetCourse} from "../apis/course"
import {
  delCatList,
  postCart,
  delCart,
  putCart,
  filterCart
} from "../axios/apis";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    a() {
      console.log(222);

      delCatList().then(res => {
        console.log(res);
      });
    },
    b() {
      var data = { title: "foo", body: "bar", userId: 1 };
      delCart(data).then(res => {
        console.log(res);
      });
    },
    c() {
      var data = { title: "foo", body: "bar", userId: 1 };
      postCart(data).then(res => {
        console.log(res);
      });
    },
    d() {
      var data = {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
      };
      postCart(data).then(res => {
        console.log(res);
      });
    },
    e() {
      var data = {
        id: 1,
        query: {
          body: 1,
          user: 2
        }
      }
      filterCart(data).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
