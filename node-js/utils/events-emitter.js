const EventEmitter = require('events');

function eventEmitter() {
    class UserEmitter extends EventEmitter {
        constructor() {
            super()
        }
        login(username) {
            this.emit('login', username)
        };
        logout(username) {
            this.emit('logout', username);
        }
    }
    const userEmitter = new UserEmitter();

    userEmitter.on('login', (username) => {
        console.log(`${username} is logged in successfully.`)
    });

    userEmitter.on('logout', (username) => {
        console.log(`${username} is log out successfully.`)
    })

    userEmitter.login('Praveen');
    userEmitter.logout('Roshni');
};

module.exports = { eventEmitter }