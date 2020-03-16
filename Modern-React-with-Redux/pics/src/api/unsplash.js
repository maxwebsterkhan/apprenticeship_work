import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0gbZSZ2gaczZ_KACjiTPeLv3O5HesIkb08t7x-uCsYk'
  }
});
