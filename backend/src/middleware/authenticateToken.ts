import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";
import config from "../config";

dotenv.config();

const authenticateToken = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: `https://${config.b2cTenant}.b2clogin.com/${config.b2cTenant}.onmicrosoft.com/${config.b2cPolicy}/discovery/v2.0/keys`,
  }) as any,

  issuer: `https://${config.b2cTenant}.b2clogin.com/${
    config.tenantId
  }/v2.0/`,
  algorithms: ["RS256"],
});

export default authenticateToken;
