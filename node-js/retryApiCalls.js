async function retries(fn, retries = 5, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i == retries - 1) {
                throw new Error(err)
            };
            const newMs = delay * 2 ** retries;
            console.log(`You can try after ${newMs} ms`)
            await new Promise((resolve) => setTimeout(resolve, delay))
        }
    }
};