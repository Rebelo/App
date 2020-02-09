module.exports = {
    apps: [{
        name: "plans-service",
        script: "./plans-service/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MONGO_DB_USER: "",
            MONGO_DB_PASS: "",
            MONGO_DB_HOST: "",
            MONGO_DB_PORT: "",
            MONGO_DB_DATABASE: "",
            PORT: ""
        },
        env_production: {
            NODE_ENV: "production",
            MONGO_DB_USER: "",
            MONGO_DB_PASS: "",
            MONGO_DB_HOST: "",
            MONGO_DB_PORT: "",
            MONGO_DB_DATABASE: "",
            PORT: ""
        },
        env: {
            NODE_ENV: "testing",
            MONGO_DB_USER: "",
            MONGO_DB_PASS: "",
            MONGO_DB_HOST: "",
            MONGO_DB_PORT: "",
            MONGO_DB_DATABASE: "",
            PORT: ""
        }
    }, {
        name: "subscriptions-service",
        script: "./subscriptions-service/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MONGO_DB_USER: "",
            MONGO_DB_PASS: "",
            MONGO_DB_HOST: "",
            MONGO_DB_PORT: "",
            MONGO_DB_DATABASE: "",
            PORT: ""
        },
        env_production: {
            NODE_ENV: "production",
            MONGO_DB_USER: "",
            MONGO_DB_PASS: "",
            MONGO_DB_HOST: "",
            MONGO_DB_PORT: "",
            MONGO_DB_DATABASE: "",
            PORT: ""
        },
        env: {
            NODE_ENV: "testing",
            MONGO_DB_USER: "",
            MONGO_DB_PASS: "",
            MONGO_DB_HOST: "",
            MONGO_DB_PORT: "",
            MONGO_DB_DATABASE: "",
            PORT: ""
        }

    }]
}