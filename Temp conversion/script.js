let h1_elem = document.getElementById("text");
let input_temp = document.getElementById("temp_input");
let div_btn = document.getElementById("buttons");
let con_btn = document.getElementById("convert");
let res_btn = document.getElementById("recet");
let change_btn = document.getElementById("change");
let check = document.getElementById("check_value");

function convertor() {
  let input_value = input_temp.value;
  let number_input_value = Number(input_temp.value);
  if (!input_value) {
    check.innerHTML = "Fill the input !";
  } else if (isNaN(input_value)) {
    check.innerHTML = "Must input numbers !";
  } else if (input_temp.placeholder === "C") {
    let c_to_faran = 1.8 * number_input_value + 32;
    check.innerHTML = `${number_input_value} Celsius is ${c_to_faran} Fahrenheit`;
  } else if (input_temp.placeholder === "F") {
    let faren_to_c = (number_input_value - 32) / 1.8;
    check.innerHTML = `${number_input_value} Fahrenheit is ${(
      Math.round(faren_to_c * 100) / 100
    ).toFixed(2)} Celsius`;
  }
}
function restart() {
  input_temp.value = "";
  check.innerHTML = "";
  input_temp.placeholder = "C";
  h1_elem.innerHTML = "Converter <sup>o</sup>C to <sup>o</sup>F";
  document.title = "Convert C to F";
}
function change() {
  if (input_temp.placeholder === "C") {
    input_temp.placeholder = "F";
    h1_elem.innerHTML = "Converter <sup>o</sup>F to <sup>o</sup>C";
    document.title = "Convert F to C";
  } else {
    input_temp.placeholder = "C";
    h1_elem.innerHTML = "Converter <sup>o</sup>C to <sup>o</sup>F";
    document.title = "Convert C to F";
  }
  check.innerHTML = "";
}
con_btn.addEventListener("click", convertor);
res_btn.addEventListener("click", restart);
change_btn.addEventListener("click", change);
