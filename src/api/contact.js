import axios from 'axios'

// 文章列表
axios.post('http://localhost:1337/contact')
  .catch(function (error) {
    console.log(error);
});