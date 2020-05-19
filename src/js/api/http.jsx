import axios from 'axios';
import config from 'config';

export const request = async (endpoint, params, type) => 
{
  return new Promise((resolve, reject) => 
  {
    let args = { params: {} };
    //format params for the request
    if (Array.isArray(params)) {
      params.forEach((value, i) => {
        if(value!==''){args.params[endpoint.params[i]] = value;}
      });
    }
    //format base request
    const net = axios.create({
        baseURL: config.api,
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });
        if(type==="POST"){
            if (net) {

                net.post(endpoint.link, args)
                .then((response) => {
                  
                  if (response.status == 200 && response.data){
                    resolve(response.data);
                  }
                  else {
                    reject("ERR: Bad API get response.");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  reject("ERR: Bad API get response.")
                });
              } else {
                reject("ERR: API not initialized");
            }

        }else if(type==="PATCH"){
            if (net) {

                net.patch(endpoint.link, args)
                .then((response) => {
                  
                  if (response.status == 200 && response.data){
                    resolve(response.data);
                  }
                  else {
                    reject("ERR: Bad API get response.");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  reject("ERR: Bad API get response.")
                });
              } else {
                reject("ERR: API not initialized");
            }

        }else{
            
            if (net) {

                net.get(endpoint.link, args)
                .then((response) => {
                  
                  if (response.status == 200 && response.data){
                    resolve(response.data);
                  }
                  else {
                    reject("ERR: Bad API get response.");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  reject("ERR: Bad API get response.")
                });
              } else {
                reject("ERR: API not initialized");
            }
        }
  });
}