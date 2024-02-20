import * as env from '@/services/environment.json'
  
    export const IP =  env.environment == 'production'? 'http://aura-test-lb-1346289722.me-central-1.elb.amazonaws.com:3000/api' : 'http://aura-test-lb-1346289722.me-central-1.elb.amazonaws.com:3000/api' ;
 