import axios from 'axios'

export const getBlog = (params) => axios.get('static/blog.json', {params})