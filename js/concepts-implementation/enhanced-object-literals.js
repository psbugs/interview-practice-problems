function createLogger(level, type) {
    return {
        level,
        type,
        log: function (message) {
            console.log(`[${level.toUpperCase()}]:[${type}]`, message)
        },
        [level + 'Log']: function (msg) {
            console.log(`>>> ${type.toUpperCase()} MESSAGE:`, msg)
        }
    }
};

let authLogger = createLogger('auth', 'info');

authLogger.log('Data is saved successfully.');

authLogger.authLog('Token is validated');