import axios from 'axios'

// 文章列表
axios.get('http://localhost:1337/team')
  .catch(function (error) {
    console.log(error);
});