import axios from 'axios'

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',    // base URL for API request.
});
