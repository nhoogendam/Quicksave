import jwt, { decode } from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        
        if( token && isCustomAuth){ 
            let decodeData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        }
        else{
            let decodeData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;