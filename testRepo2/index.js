
const callPolice = () => {
    console.log('Call 02');
}

const alarm = (thiefs, callback) => {
    console.log(thiefs)
    if (thiefs < 10) {
        return;
    }

    callback(thiefs)
}

for(let i = 1; i<20; i++) {
    setTimeout(() => {
        alarm(i, callPolice)
    }, 100 * i)
}