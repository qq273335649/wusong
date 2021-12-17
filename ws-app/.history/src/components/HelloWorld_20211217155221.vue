<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/wallhaven-o37xzl_1920x1080.png" />
    <ul v-for="item in list" :key="item._id">
      <li>{{ item.student.name }} - {{item.student.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: `Welcome to Ws's App`,
      list: [],
    }
  },
  created(props){
    console.log(props);
    this.loadData();
  },
  methods:{
    loadData(){
      //get 请求接口
      var _this=this;
      _this.$axios.get(`/api/student`)
        .then(res=> {
          console.log(res.data.student)
        })
        .catch(error=>{
          console.log(error)
        })
    },
    loadPost(){
      //post请求接口
      var _this=this;
      _this.$axios.post(
        `../static/tsconfig.json`,
        _this.$qs.stringify({
          sname:'hahaha'
        })
      )
        .then(res=> {
          let data=res.data.data;
          console.log(data.description)
        })
        .catch(error=>{
          console.log(error)
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
