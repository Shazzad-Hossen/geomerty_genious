const ol_id = document.getElementById('output');

function blog() {
    location.href="/blog.html";
}

function valueCatch(a, b) {
    const val1 = document.getElementById(a).value;
    const val2 = document.getElementById(b).value;
    const arr = [];
    arr.push(val1);
    arr.push(val2);
    return arr;
}


function multiplication(a, b) {
    return a * b;
}
function checkNumber(a, b) {
    a = isNaN(a);
    b = isNaN(b);
    if (a === false && b === false)
        return true;
    else
        return false;
}
function validation(a, b) {
    if (a === '' || b === '') {
        alert("please fillup all the fields");
    }

    else if (checkNumber(a, b) === false) {
        alert("Input Must be Number");


    }
    else if (a < 0 || b < 0) {
        alert("Input Must be a positive number");
    }
    else
        return true;


}
function appendLi(itemName, area) {
    let li = document.createElement('li');
    li.style.marginBottom = '10px';
    li.innerHTML = ` <div class=" flex justify-between items-center"> <span>${itemName}  ${area}  cm<sup>2<sup> </span> <div class="btn bg-sky-600  border-0 py-0"> Convert to m<sup>2<sup> </div>  </div> `;
    ol_id.appendChild(li);


}

function enableEdit(id) {
    if (id === 3) {
        document.getElementById('ed3').classList.remove("invisible");
       

    }
    if (id === 4) {
        document.getElementById('ed4').classList.remove("invisible");
    }
    if (id === 5) {
        document.getElementById('ed5').classList.remove("invisible");
    }
    if (id === 6) {
        document.getElementById('ed6').classList.remove("invisible");

    }


}

function triangle() {
    const base = document.getElementById('tri-b').value;
    const height = document.getElementById('tri-h').value;
    if (validation(base, height) === true) {
        let area = 0.5 * multiplication(base, height);
        if(Number.isInteger(area) === false) area=area.toFixed(2);
        appendLi("Triangle", area);
    }

}


function rectangle() {

    const width = document.getElementById('rec-w').value;
    const height = document.getElementById('rec-l').value;

    if (validation(width, height) === true) {
        let area = multiplication(width, height);
        if(Number.isInteger(area) === false) area=area.toFixed(2);
        appendLi("Rectangle", area);
    }


}

function Parallelogram() {

    let a = 10;
    let b = 12 ;

    if (document.getElementById('chk3').checked == true) {
        const arr = valueCatch('i_31', 'i_32');
        a = arr[0];
        b = arr[1];


    }
    if (validation(a, b) === true) {
        let area =multiplication(a, b);
        if(Number.isInteger(area) === false) area=area.toFixed(2);
        appendLi("Parallelogram", area);
    }




}


function Rhombus() {
    let a = 16;
    let b = 8;

    if (document.getElementById('chk4').checked == true) {
        const arr = valueCatch('i_41', 'i_42');
        a = arr[0];
        b = arr[1];


    }
    if (validation(a, b) === true) {
        let area =0.5 * multiplication(a, b);
        if(Number.isInteger(area) === false) area=area.toFixed(2);
        appendLi("Rhombus", area);
    }


}

function Pentagon() {
    let a = 6;
    let b = 10;

    if (document.getElementById('chk5').checked == true) {
        const arr = valueCatch('i_51', 'i_52');
        a = arr[0];
        b = arr[1];


    }
    if (validation(a, b) === true) {
        let area =0.5 * multiplication(a, b);
        if(Number.isInteger(area) === false) area=area.toFixed(2);
        appendLi("Pentagon", area);
    }


}

function Ellipse() {
    let a = 10;
    let b = 4;

    if (document.getElementById('chk6').checked == true) {
        const arr = valueCatch('i_61', 'i_62');
        a = arr[0];
        b = arr[1];


    }
    if (validation(a, b) === true) {
        let area =3.14159 * multiplication(a, b);
        if(Number.isInteger(area) === false) area=area.toFixed(2);
        appendLi("Ellipse", area);
    }


}

function randBG(x) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    x.style.backgroundColor = "#" + randomColor;
   
  }
  
  function normalBG(x) {
    x.style.backgroundColor = "#FFFFFF";
    
  }