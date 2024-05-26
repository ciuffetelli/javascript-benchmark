export async function measurement(alghorytim: () => any) {
    const startTime = performance.now();
    await alghorytim();
    const endTime = performance.now();

    return endTime - startTime;
}