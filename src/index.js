import { app } from "./app.js";
import config from "./config/index.js";

app.listen(config.port, () => console.log(`server started on port ${config.port}`));
