import axios from 'axios';

export const request = async (endpoint, params, type) => 
{
  return new Promise((resolve, reject) => 
  {
    let args = { params: {} };
    
    if (Array.isArray(params)) {
      params.forEach((value, i) => {
        if(value!==''){args.params[endpoint.params[i]] = value;}
      });
    }
        if(type==="POST"){

        }else if(type==="PATCH"){

        }else{
            //get request
        }
  });
}