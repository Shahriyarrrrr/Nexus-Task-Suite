import rateLimit from "express-rate-limit";

export default function(max=60,window=60000){
  return rateLimit({
    windowMs:window,
    max:max,
    standardHeaders:true,
    legacyHeaders:false
  });
}
