

const ensureAuth = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(401).json({message: "Unauthorized, jwt is required", success:false });
    }
    try{
        const decodedToken = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch(err){
        console.log("huihui jwt ERROR", err.message);
        return res.status(401).json({message: "Unauthorized, invalid jwt", success:false });
    }
}

module.exports = ensureAuth ;