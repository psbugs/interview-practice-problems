function createTimer() {
    let timer = 0;
    let intervalId = null;
    let isPaused = false;

    return {
        start() {
            if (intervalId !== null) {
                console.log("Timer already running");
                return;
            }
            intervalId = setInterval(() => {
                timer++;
                console.log("Timer:", timer, "sec");
            }, 1000);
        },

        pause() {
            if (intervalId !== null) {
                clearInterval(intervalId);
                intervalId = null;
                console.log("Paused at", timer, "sec");
            }
        },

        resume() {
            if (intervalId === null) {
                intervalId = setInterval(() => {
                    timer++;
                    console.log("Timer:", timer, "sec");
                }, 1000);
                console.log("Resumed at", timer, "sec");
            }
        }
    };
}


const timer = createTimer();

timer.start();

setTimeout(() => timer.pause(), 3000);  // Pause after 3 seconds
setTimeout(() => timer.resume(), 5000); // Resume after 5 seconds (2 sec pause)