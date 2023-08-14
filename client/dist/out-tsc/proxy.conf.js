const PROXY_CONFIG = [
    {
        context: ["/api"],
        target: "https://api.ulearn.shop",
        secure: false,
        logLevel: "error",
        changeOrigin: true,
    }
];
module.exports = PROXY_CONFIG;
//# sourceMappingURL=proxy.conf.js.map