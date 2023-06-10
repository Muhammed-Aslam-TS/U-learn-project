import dotenv from "dotenv";
dotenv.config();

const dotenvConfig = {
    // jwt_access_token and refresh_token___________________

    access_token_key: process.env.JWT_ACCESS_TOKEN_KEY as string,
    refresh_token_key: process.env.JWT_REFRESH_TOKEN_KEY as string,
    // ________________________________________________________________

    //aws_access and secret_keys_______________________
    aws_accessKeyId: process.env.AWS_S3_ACCESS_KEY as string,
    aws_secretAccessKey: process.env.AWS_S3_SECRET_KEY as string,
    aws_bucket_name: process.env.AWS_BUCKET_NAME as string,
    asw_region: process.env.AWS_REGION as string,
    // _____________________________________________



    firebase_apiKey: process.env.FIRBASE_API_KEY,
    firebase_authDomain: process.env.FIRBASE_AUTHDOMAIN,
    firebase_projectId: process.env.FIREBASE_PROJECT_ID,
    firebase_storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebase_messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID,
    firebase_appId: process.env.FIREBASE_APP_ID,
    firebase_measurementId: process.env.FIREBASE_MEASUREMENT_ID

};


export default dotenvConfig;





