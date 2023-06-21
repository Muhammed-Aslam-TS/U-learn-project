"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server = (app) => {
    app.listen(3000, () => {
        // eslint-disable-next-line no-console
        console.log("server start on port 3000");
    });
};
exports.default = Server;
