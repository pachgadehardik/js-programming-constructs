//UC1
{
    function rollADie() {
        return 1 + Math.floor(Math.random() * 10) % 6;
    }
    // console.log(rollADie())
    let dictionary = new Map();
    let flag = true
    let count = 1;
    function printTwo(values, key) {
        console.log(key + "  " + values);
    }

    while (flag) {
        dictionary.set(rollADie(), count)
        if (count == 10)
            flag = false;
        count++;
    }
    function getKey(value) {
        return [...dictionary].find(([key, val]) => val == value)[0]
    }

    dictionary.forEach(printTwo)
    const mapSort1 = new Map([...dictionary.entries()].sort((a, b) => b[1] - a[1]));
    minVal = Math.min(...dictionary.values());
    maxVal = Math.max(...dictionary.values())
    console.log("min number of times number dice occured is :" + getKey(minVal));
    console.log("max number of times number dice occured is :" + getKey(maxVal));

}

//UC2
{   
     function generateMonth(){
        return 1 + Math.floor(Math.random() * 12); 
    }

    let birthMap = new Map();
    for(var i=1;i<=50;i++){
        birthMap.set(i,generateMonth());
    }
    
    let array = Array.from(birthMap, ([Person, BirthMonth]) => ({ Person, BirthMonth }));
    console.log(array);
    for(var i=1;i<=12;i++){
        let arr2 = array.filter(obj => obj.BirthMonth == i);
        console.log(arr2);
    }

}