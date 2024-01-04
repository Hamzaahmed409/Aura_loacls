import * as env from '@/services/environment.json'
  
    export const IP =  env.environment == 'production'? 'https://monbackend.ai/api' : 'http://127.0.0.1:8000/api' ;
 