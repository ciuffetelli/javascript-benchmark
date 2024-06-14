export async function measurement(Algorithm: () => any) {
    const startTime = performance.now();
    await Algorithm();
    const endTime = performance.now();

    return endTime - startTime;
}