function getValue(a) {
    var inp = document.getElementById('inp')
    inp.value += a
}

function calculate() {
    var inp = document.getElementById('inp')
    var a = inp.value
    var b = eval(a)
    inp.value = b

    // for(var i = inp; i < inp.length ; i++)
    // {
    //     if (inp.charAt(i) == "++" || inp.charAt(i) == "+-" || inp.charAt(i) == "--" || inp.charAt(i) == "-+")
    //     {
    //         inp.value = "Syntax Error";
    //         break;
    //     }

    // }
}

function remove() {
    var inp = document.getElementById('inp')
    inp.value = '';
}