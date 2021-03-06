import axios from 'axios'

// 文章列表
axios.get('http://localhost:1337/rule')
  .catch(function (error) {
    console.log(error);
});