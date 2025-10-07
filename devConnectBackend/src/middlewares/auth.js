const adminAuth =  (req, res, next) =>{
    console.log("admin auth is getting checked")
    const token = "abc";
    const isAdminAuthorized = token === "abc";

    if (!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
}

const userAuth =  (req, res, next) =>{
    console.log("admin auth is getting checked")
    const token = "abcasd";
    const isAdminAuthorized = token === "abc";

    if (!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
}

module.exports ={
    adminAuth,
    userAuth
}