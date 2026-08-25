const wait = async (ms: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

export const loadText = async (
    newText: string,
    callback: (val: string) => void
) => {
    const len = newText.length;

    const increment = len / 5;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 7; j += increment) {
            callback(newText.substring(0, i)); // no fill
            await wait(7);
        }
    }

    callback(newText);
};
