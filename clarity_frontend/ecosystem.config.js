export const apps = [
    {
        name: "clarity_frontend",
        port: "3000",
        exec_mode: "cluster",
        instances: "max",
        script: "./.output/server/index.mjs",
    },
];
