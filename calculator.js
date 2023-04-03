function inputs(number) {
  document.display.result.value = document.display.result.value + number;
}

function clr() {
  document.display.result.value = "";
}

function dlt() {
  let del = document.display.result.value;
  document.display.result.value = del.substring(0, del.length - 1);
}

function final() {
  let result = document.display.result.value;
  if (result === "") {
    document.display.result.value = "";
  } else {
    document.display.result.value = eval(result);
  }
}
