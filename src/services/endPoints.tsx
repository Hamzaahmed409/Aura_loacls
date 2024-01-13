import * as env from '@/services/environment.json'
  
    export const IP =  env.environment == 'production'? 'http://ec2-3-89-190-14.compute-1.amazonaws.com:3000/api' : 'http://ec2-3-89-190-14.compute-1.amazonaws.com:3000/api' ;
 