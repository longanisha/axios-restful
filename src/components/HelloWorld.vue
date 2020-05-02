<template>
  <div>
    <button @click="get">get方法</button>
    <button @click="del">del方法</button>
    <button @click="post">post方法</button>
    <button @click="put">put方法</button>
    <button @click="fil">筛选方法</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    get() {
      console.log(222);
      // 参数输入url, data
      var data = {
        id: 1
      };
      this.$api.delCatList(1, data).then(res => {
        console.log(res);
      });
    },
    del() {
      var data = { title: "foo", body: "bar", userId: 1 };
      this.$api.delCart(1, data).then(res => {
        console.log(res);
      });
    },
    post() {
      var data = { title: "foo", body: "bar", userId: 1 };
      this.$api.postCart(data).then(res => {
        console.log(res);
      });
    },
    put() {
      var data = {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
      };
      this.$api.postCart(data).then(res => {
        console.log(res);
      });
    },
    fil() {
      var data = {
        id: 1,
        query: {
          body: 1,
          user: 2
        }
      };
      this.$api.filterCart(data).then(res => {
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
