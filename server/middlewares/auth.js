import jwt from 'jsonwebtoken'

const userAuth = async (req,res,next)=>{
        const {token}= req.headers;

        if(!token){
            res.json({success:false, message:' not authorized login again'})
        };

        try {
            const tokenDecode= jwt.verify(token, process.env.JWT_SECRET);

            if(tokenDecode.id){
                //sf
                //problem aa rhi thi is  liye aadd kiya undefined user_id bata rha tha 
                req.body=req.body || {}
                req.body.userId= tokenDecode.id;
            }
            else{

                res.json({success:false, message:' not authorized login again'})

            }

            next();
        } catch (error) {
               console.log(error);
                res.json({success: false,
                message: error.message
            })
        }

};

export default userAuth;