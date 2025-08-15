/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every `delay` milliseconds
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - The number of milliseconds to throttle invocations to
 * @return {Function} Returns the new throttled function
 */


// Throttling limits the execution of a function to once in a specified time interval, no matter how many times it's triggered.

// Think of scroll, resize, or mousemove events: they can fire hundreds of times per second, but you want to run your handler only once every X ms.
function throttle(func, delay) {
  let lastCallTime = 0;
  let lastResult;

  return function (...args) {
    const now = Date.now();

    if (now - lastCallTime >= delay) {
      lastCallTime = now;
      lastResult = func.apply(this, args);
    }

    return lastResult;
  };
}

module.exports = throttle;