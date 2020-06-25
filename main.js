var text = "";
var nub1 = "";
var jsf = "";
var nub2 = "";
var a = b = false;
var rst = "";
var oShow = document.getElementById("show");
var oEnd = document.getElementById("end");
function rste() {

    switch (jsf) {
        case "-":
            rst = parseFloat(nub1) - parseFloat(nub2)
            break;
        case "+":
            rst = parseFloat(nub1) + parseFloat(nub2)
            break;
        case "×":
            rst = parseFloat(nub1) * parseFloat(nub2)
            break;
        case "÷":
            rst = parseFloat(nub1) / parseFloat(nub2)
            break;
        case "¹/":
            rst = 1 / parseFloat(nub1)
            break;
        case "²":
            rst = Math.pow(nub1, 2)
            break;
        case "²√":
            if (nub1 >= 0) { rst = Math.pow(nub1, 1 / 2) }
            else { oEnd.innerHTML = "不支持该计算"; }
            break;
        case "%":
            rst = nub1 / 100
            break;
        default:
            alert("不支持该计算")
            gsh()
            break;
    }


    console.log(nub1, jsf, nub2, rst)
    oEnd.innerHTML = text;
    oShow.innerHTML = rst;
    gsh()
    console.log('nub1:' + nub1)
    console.log('nub2:' + nub2)
    console.log("rst:" + rst)

}
function tap(e) {
    //输入数字2
    if (jsf) {
        if (e >= 0 && e <= 9) {
            if (nub2 == "0" && e == 0) {
                nub2 = "0"
            } else {
                nub2 = nub2 + e + ""
            }
        }
        else if (e == "±") {
            if (!nub2) {

            } else {
                nub2 = "" + (-1 * parseFloat(nub2))
            }
        }
        else if (e == ".") {
            if (nub2 == "") { }
            else if (b) { }
            else {
                nub2 += e
                b = true
            }
        } else {

            jsf = e
        }

    }
    //输入数字1和计算符
    if (!jsf) {

        if (e >= 0 && e <= 9) {
            if (nub1 == "0" && e == 0) {
                nub1 = "0"
            } else {
                nub1 = "" + nub1 + e
            }
        }
        else if (e == "±") {
            if (!nub1) { }
            else {
                nub1 = "" + (-1 * parseFloat(nub1))
            }
        }
        else if (e == ".") {
            if (nub1 == "") { }
            else if (a) { }
            else {
                nub1 = "" + nub1 + e
                a = true
            }
        }
        else {
            if (rst || nub1) {
                if (nub1 == "") { nub1 = rst };
                jsf = e
            }

        }

    }
    console.log('nub1:' + nub1)
    console.log("jsf:" + jsf)
    console.log('nub2:' + nub2)
    console.log("e:" + e)
    text = nub1 + jsf + nub2
    if (jsf == '¹/' || jsf == "²√") { text = jsf + nub1; oShow.innerHTML = text }
    if (parseFloat(nub2) < 0) { text = nub1 + jsf + "(" + nub2 + ")" }
    if (text == "") { oShow.innerHTML = rst; }
    else { oShow.innerHTML = text; }

}
function gsh() {
    nub1 = "";
    jsf = "";
    nub2 = "";
    a = false;
    b = false;
}
function cle() {
    gsh()
    oShow.innerHTML = ""
    oEnd.innerHTML = rst;
}
function cleAll() {
    cle()
    rst = ""
    oEnd.innerHTML = ""
}
function del() {
    if (nub2) {
        nub2 = nub2.substr(0, nub2.length - 1);
        console.log(nub2)
    } else if (jsf) {
        jsf = jsf.substr(0, jsf.length - 1);
        console.log(jsf)
    } else if (nub1) {
        nub1 = nub1.substr(0, nub1.length - 1);
        console.log(nub1)
    }
    text = "" + nub1 + jsf + nub2;
    if (text == "") { oShow.innerHTML = rst; }
    else { oShow.innerHTML = text; }
}
