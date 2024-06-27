
function randomPlusMinus() { return (Math.random() * 2) - 1; }

export function getRandomData(numPoints, center, min, max, cycles) {
    let result = [];
    let y = center;

    cycles.forEach( thisCycle => {
        thisCycle.phase = Math.random() * Math.PI;
        thisCycle.increment = Math.PI / thisCycle.length;
        console.log(thisCycle.phase);
        result.push(thisCycle.phase);
    })
   for (let i = 0; i < numPoints; i++)
    {
        cycles.forEach( thisCycle => {
            thisCycle.phase += thisCycle.increment * randomPlusMinus();
            y += (Math.sin(thisCycle.phase) * (thisCycle.variance / thisCycle.length) * (randomPlusMinus() * thisCycle.noise)) + (thisCycle.trend / thisCycle.length);

        });
        if (min) y = Math.max(y,min);
        if (max) y = Math.min(y,max);
        result.push(y);
    }
    return result;
}


