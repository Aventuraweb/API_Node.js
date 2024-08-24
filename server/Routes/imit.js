import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,  // limit each IP to 1000 rquest per windowMs
    massage: "Too many request from this IP, please try again after 15 minutes"
}); 

export default limiter; 