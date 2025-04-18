import axios from "axios";
import { BASE_API_URL } from "../../Constant";

export async function getBlogs() {
  try {
    const response = await fetch(BASE_API_URL,{
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            
        },
    });
    const data = await response.json();
	return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBlog( id) {
  const response = await axios.get(`${BASE_API_URL}/${id}`);
  return response.data;
}

export async function likeBlog(id) {
  const response = await axios.post(`${BASE_API_URL}/${id}/like`);
  return response.data;
}

