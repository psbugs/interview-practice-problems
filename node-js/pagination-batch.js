async function fetchPage(page) {
    console.log(`Fetching page ${page}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ Page ${page} fetched`);
            resolve({ page, data: `Data for page ${page}` });
        }, Math.random() * 2000 + 500); // random delay
    });
}

// Pages to fetch
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const batchSize = 3;

async function fetchInBatches() {
    let allResults = [];

    for (let i = 0; i < pages.length; i += batchSize) {
        const batch = pages.slice(i, i + batchSize);
        console.log(`\n🚀 Fetching batch: ${batch.join(", ")}`);

        // Fetch this batch in parallel
        const results = await Promise.all(batch.map(p => fetchPage(p)));
        allResults = allResults.concat(results);

        console.log(`📦 Batch ${batch.join(", ")} complete`);
    }

    return allResults;
}

(async () => {
    console.log("📢 Starting paginated fetch...\n");
    const results = await fetchInBatches();
    console.log("\n🎯 All pages fetched:");
    console.table(results);
})();
