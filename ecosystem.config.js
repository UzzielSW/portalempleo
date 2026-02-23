module.exports = {
    apps: [{
        name: 'portalempleo',
        script: '../portalempleo/bin/www',
        cwd: '../portalempleo/',
        instances: 1,
        exec_mode: 'cluster',
        watch: true,
        ignore_watch: ['[\/\\]\./', 'node_modules', 'sessions'],
        max_memory_restart: "1G", // Lo debe de asignar infraestructura
        env_development: {
            "NODE_ENV": "development",
            "PORT": 7011,
            "PORTS": 3011,
            "RUTA_SSL": "", // "/etc/nginx/ssl/",
            "CRT": "", // Nombre del CRT
            "KEY": "", // Nombre de archivo KEY
            "HOST": "10.0.1.31",
            "USER": "",
            "PASSWORD": "",
            "DATABASE": "ora2",
            "CONNECTSTRING": "10.0.1.31/ora2",
            "ALGORITHM": "RS256",
            "ISSUER": "Universidad de Panamá",
            "SECRET_JWT_SEED": "",
            "EXPIRESIN": "2h"
        },
        env_production: {
            "NODE_ENV": "production",
            // Aquí infraestructura debe poner todas las configuraciones pertinentes.
        },
        combine_logs: false,
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        error_file: '../../pm2-logs/PortalEmpleoUP-err.log',
        out_file: '../../pm2-logs/PortalEmpleoUP-out.log',
        pid_file: '../../pm2-logs/PortalEmpleoUP-pm_id.pid',
        min_uptime: '60s',
        max_restarts: 10,
        listen_timeout: 8000,
        kill_timeout: 1600,
        shutdown_with_message: true,
        restart_delay: 50000,
        autorestart: true,
        vizion: true,
        force: false
            // args: '', // No aplica, por el momento
            // interpreter: '', // No aplica, por el momento
            // interpreter_args: '', // No aplica, por el momento
            // node_args: '', // No aplica, por el momento
            // post_update: ['npm install', 'echo launching the app'],
            // source_map_support: true, // true por defecto
            // instance_var: '', // No se usa, por el momento
            // filter_env: '', // No se usa, por el momento
            //cron_restart: 'M A C 1 0 * * *', // No se usa, por el momento
            // wait_ready: false, // No se usa, por el momento

    }],
    // deploy: { // No se usa, por el momento
    //     production: { // No se usa, por el momento
    //         user: 'SSH_USERNAME', // No se usa, por el momento
    //         host: 'SSH_HOSTMACHINE', // No se usa, por el momento
    //         ref: 'origin/master', // No se usa, por el momento
    //         repo: 'GIT_REPOSITORY', // No se usa, por el momento
    //         path: 'DESTINATION_PATH', // No se usa, por el momento
    //         'pre-deploy-local': '', // No se usa, por el momento
    //         'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',// No se usa, por el momento
    //         'pre-setup': '' // No se usa, por el momento
    //     }
    // }
};