import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const list = () => http.get('/')

const search = (search) => http.get('/', { params: { q: search } })


export default {
  list,
  search
}