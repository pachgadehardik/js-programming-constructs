//uc1
const MAXVALUE = 256;
let num = 1;
while (num <= MAXVALUE) {
    console.log(num);
    num *= 2;
}

//UC 2
function checkMagicNumber(range, magicNumber) {
    let mid = Math.floor((range.right - range.left) / 2);
    if (magicNumber > mid + range.left) {
        range.left += mid;
    } else if (magicNumber < mid + range.left) {
        range.right -= mid;
    }
    else {
        range.left += mid;
        range.right -= mid;
    }
}

let magicNumber = 84
let range = { left: 1, right: 100 };
let flag = true;
while (flag) {
    if (range.right - range.left == 1) {
        console.log("MagicNumber is :"+range.left);
        flag = false;
    }
    checkMagicNumber(range, magicNumber);
}

//UC3
const HEAD = 0;
const TAIL = 1;
let headCounter = 0;
let tailCounter = 0;
let winner = false;
while (winner == false) {
    let toss = Math.floor(Math.random() * 10) % 2;

    switch (toss) {
        case HEAD:
            headCounter++;
            if (headCounter == 11) winner = true;
            break;
        case TAIL:
            tailCounter++;
            if (tailCounter == 11) winner = true;
            break;
        default:
            break;
    }
}
if (headCounter == 11) {
    console.log("Head is Winner");
}
if (tailCounter == 11) {
    console.log("Tail is Winner");
}

//UC 4
{
const LOSE = 0;
const WIN = 1;
const TARGET = 200;
const EMPTY = 0;
let money = 100;
let loseCounter = 0;
let winCounter = 0;
let flag = false;
while (flag == false) {
    let bet = Math.floor(Math.random() * 10) % 2;
    switch (bet) {
        case LOSE:
            money--;
            loseCounter++;
            if (money == EMPTY)
                flag = true;
            break;
        case WIN:
            money++;
            winCounter++;
            if (money == TARGET)
                flag = true;
            break;
        default:
            break;
    }
}
if (money == EMPTY) console.log("LOST IN " + loseCounter);
if (money == TARGET) console.log("WON in: " + winCounter);
}

