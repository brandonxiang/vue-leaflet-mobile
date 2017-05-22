import jsonp from 'jsonp'
import querystring from 'querystring'

export default function(url, data, params) {
  return new Promise((resolve, reject) => {
    if (data) url += "?" + querystring.stringify(data)
    params = params || {timeout: 15000}
    if (!params.timeout) params.timeout = 15000
    jsonp(url, params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })  
}