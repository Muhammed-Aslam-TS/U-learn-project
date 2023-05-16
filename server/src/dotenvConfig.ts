import dotenv from "dotenv";
dotenv.config();


const dotenvConfig= {
    access_token_key : process.env.JWT_ACCESS_TOKEN_KEY as string,
    refresh_token_key : process.env.JWT_REFRESH_TOKEN_KEY as string,
};

export default dotenvConfig;