export default {
  admin(req,res,next){
    if(req.user.role!=="admin") return res.status(403).json({error:"Forbidden"});
    next();
  },
  developer(req,res,next){
    if(req.user.role!=="developer") return res.status(403).json({error:"Forbidden"});
    next();
  },
  user(req,res,next){
    if(req.user.role!=="user") return res.status(403).json({error:"Forbidden"});
    next();
  }
};
