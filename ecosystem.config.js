module.exports = {
    apps : [{
        name: 'mariox-frontend',
        script: 'npm',
        args: 'start',
        watch: true,
        env: {
            NODE_ENV: 'development',
            PORT: 3001
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 3001
        }
    }]
};

//pm2 start npm --name mariox-frontend -- start -- --port 3001