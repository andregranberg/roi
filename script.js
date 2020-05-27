/* Du kan skapa hover-drop down menyn med DOM mouseover. Bara: select and manipulate. 

checka denna: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

Basically verkar det som att man får göra display:block i css med det som kommer att komma ut som html-drop down. på den class som man tilldelar det html-elementet. 

Samma princip för färgerna; onmouseover: så ska det bli border top color ungefär. 

*/


/* CALCULATOR */

// ***VARIABLER*** //

var slider_1 = document.getElementById("myRange_1");
var slider_2 = document.getElementById("myRange_2");
var slider_3 = document.getElementById("myRange_3");
var slider_4 = document.getElementById("myRange_4");

var startbelopp_output = document.getElementById("startbelopp");
var investering_per_månad_output = document.getElementById("investering_per_månad");
var avkastning_output = document.getElementById("avkastning");
var spartid_output = document.getElementById("spartid");
var summa = document.getElementById("summa");

// ***OUTPUT INDIVIDUAL SLIDERS*** //

startbelopp_output.innerHTML = slider_1.value;
investering_per_månad_output.innerHTML = slider_2.value;
avkastning_output.innerHTML = Math.round(100 * Number(slider_3.value)) + "%";
spartid_output.innerHTML = slider_4.value;

// ***FORMEL*** //

var summa_startbelopp = Number(slider_1.value) * (1+Number(slider_3.value)) ** Number(slider_4.value);

var n = 0;
var summa_månadssparande = 0

while (n < Number(slider_4.value)) {
  summa_månadssparande = summa_månadssparande + Number(slider_2.value) * 12 * (1+Number(slider_3.value)) ** (Number(slider_4.value)-n);
  n++;
  }

summa.innerHTML = Math.round(summa_startbelopp + summa_månadssparande)


// ***SLIDERS*** //

slider_1.oninput = function() {
  var summa_startbelopp = Number(slider_1.value) * (1+Number(slider_3.value)) ** Number(slider_4.value);

  var n = 0;
  var summa_månadssparande = 0

  while (n < Number(slider_4.value)) {
    summa_månadssparande = summa_månadssparande + Number(slider_2.value) * 12 * (1+Number(slider_3.value)) ** (Number(slider_4.value)-n);
    n++;
    }

  summa.innerHTML = Math.round(summa_startbelopp + summa_månadssparande)

  startbelopp_output.innerHTML = this.value;
}

slider_2.oninput = function() {
  var summa_startbelopp = Number(slider_1.value) * (1+Number(slider_3.value)) ** Number(slider_4.value);

  var n = 0;
  var summa_månadssparande = 0

  while (n < Number(slider_4.value)) {
    summa_månadssparande = summa_månadssparande + Number(slider_2.value) * 12 * (1+Number(slider_3.value)) ** (Number(slider_4.value)-n);
    n++;
    }

  summa.innerHTML = Math.round(summa_startbelopp + summa_månadssparande)

  investering_per_månad_output.innerHTML = this.value;
}

slider_3.oninput = function() {
  var summa_startbelopp = Number(slider_1.value) * (1+Number(slider_3.value)) ** Number(slider_4.value);

  var n = 0;
  var summa_månadssparande = 0

  while (n < Number(slider_4.value)) {
    summa_månadssparande = summa_månadssparande + Number(slider_2.value) * 12 * (1+Number(slider_3.value)) ** (Number(slider_4.value)-n);
    n++;
    }

  summa.innerHTML = Math.round(summa_startbelopp + summa_månadssparande)

  avkastning_output.innerHTML = Math.round(100 * Number(this.value)) + "%";
}

slider_4.oninput = function() {
  var summa_startbelopp = Number(slider_1.value) * (1+Number(slider_3.value)) ** Number(slider_4.value);

  var n = 0;
  var summa_månadssparande = 0

  while (n < Number(slider_4.value)) {
    summa_månadssparande = summa_månadssparande + Number(slider_2.value) * 12 * (1+Number(slider_3.value)) ** (Number(slider_4.value)-n);
    n++;
    }

  summa.innerHTML = Math.round(summa_startbelopp + summa_månadssparande)

  spartid_output.innerHTML = this.value;
}

