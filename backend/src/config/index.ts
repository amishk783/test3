import dotenv from "dotenv";
const envFound = dotenv.config();

if (process.env.NODE_ENV === "development" && envFound.error) {
  throw new Error("Couldn't find .env file");
}

interface ServerConfig {
  nodeEnv: string;
  port: number;
  databaseURL: string;
  tenantId: string;
  b2cPolicy: string;
  b2cTenant: string;
  logs: { level: string };
}

const config: ServerConfig = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "5005") || 5005,
  tenantId: process.env.TENANT_ID || "",
  databaseURL: "",
  b2cPolicy: process.env.B2C_POLICY || "",
  b2cTenant: process.env.B2C_TENANT_NAME || "",

  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
};
export default config;
