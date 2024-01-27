import * as env from '@/services/environment.json'
  
    export const IP =  env.environment == 'production'? 'http://ec2-54-165-34-171.compute-1.amazonaws.com:3000/api' : 'http://ec2-54-165-34-171.compute-1.amazonaws.com:3000/api' ;
 