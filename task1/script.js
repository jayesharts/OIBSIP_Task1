const display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function append(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = "Error";
  }
}
