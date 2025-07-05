let memory = 0;
function appendValue(val) {
    document.getElementById("display").value += val;
}
function clearDisplay() {
    document.getElementById("display").value = ' ';
}
function calculate() {
    try {
        document.getElementById("display").value =
            eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

document.querySelector(".p-m").onclick = function () {
    const display = document.getElementById("display");
    if (display.value.charAt(0) === "-") {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }
};

document.querySelector(".root1").onclick = function () {
    const display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
};
document.querySelector(".per").onclick = function () {
    const display = document.getElementById("display");
    display.value = parseFloat(display.value) / 100;
};

document.querySelector(".pi").onclick = function () {
    appendValue(Math.PI.toFixed(4));
};

document.querySelector(".squ").onclick = function () {
    appendValue("**");
};

document.querySelector(".mc").onclick = function () {
    memory = 0;
};
document.querySelector(".mr").onclick = function () {
    appendValue(memory);
};
document.querySelector(".m-plus").onclick = function () {
    memory += parseFloat(document.getElementById("display").value) || 0;
};
document.querySelector(".m-minus").onclick = function () {
    memory -= parseFloat(document.getElementById("display").value) || 0;
};

document.querySelector(".mc").onclick = function () {
    memory = 0;
    alert("Memory cleared");
};

document.querySelector(".mr").onclick = function () {
    const display = document.getElementById("display");
    display.value = memory;
};

let reg2 = 0;
let reg0 = 0;

document.querySelector(".r2").onclick = function () {
    reg2 = parseFloat(document.getElementById("display").value) || 0;
    alert("Stored in R2: " + reg2);
};

document.querySelector(".r0").onclick = function () {
    document.getElementById("display").value = reg2;
};