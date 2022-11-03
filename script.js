let btnStark = document.querySelector(".casa-1");
btnStark.addEventListener("click", function () { fncasas(362); });

let btnTargaryen = document.querySelector(".casa-2");
btnTargaryen.addEventListener("click", function () { fncasas(378); });

let btnLinester = document.querySelector(".casa-3");
btnLinester.addEventListener("click", function () { fncasas(229); });

let btnBaratheon = document.querySelector(".casa-4");
btnBaratheon.addEventListener("click", function () { fncasas(17); });

function fncasas(num) {
    $.get("https://anapioficeandfire.com/api/houses/" + num, function (data) {

        let datoname = document.querySelector("#name");
        datoname.innerHTML = "Name : " + data.name;

        let datowords = document.querySelector("#words");
        datowords.innerHTML = "Words : " + data.words;

        let datostitle = document.querySelector("#title");
        let detalleTitle = '';

        for (let i = 0; i < data.titles.length; i++) {
            detalleTitle = detalleTitle + data.titles[i] + ", ";
        }
        datostitle.innerHTML = "Title : " + detalleTitle;
        
    });

}