import { App } from "./app";
import 'dotenv/config'

(async function init() {
    const node = new App(process.env.PORT || 3000);
    await node.listen();
    await node.mongoose(process.env.MONGO_URL);
})();