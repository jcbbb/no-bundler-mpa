import { PORT, PORT_DEV, PORT_STAGING } from "./secrets.js";

export const configs = {
  production: {
    port: PORT,
  },
  development: {
    port: PORT_DEV,
  },
  staging: {
    port: PORT_STAGING,
  },
};
