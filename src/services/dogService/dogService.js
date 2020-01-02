import axios from 'axios';

const url = 'http://localhost:3001/dogs/';

export async function getFeaturedDogs() {
  const requestUrl = `${url}?featured=true`;
  const res = await axios.get(requestUrl);
  return res.data;
};

export async function getAllDogs() {
  const res = await axios.get(url);
  return res.data;
};

export async function getDogByName(name) {
  const res = await axios.get(`${url}?name=${name}`);
  return res.data[0];
};