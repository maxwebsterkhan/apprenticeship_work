import axios from 'axios'

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

/* base URL for API request, can also take in other keys and key values
such as API keys and other information required for an API call */
