var capsLock = '0';  /*for capslock keys when screen is loading*/
var numLock = '0';   /*for numlock keys when screen is loading*/
var shift = '0';   /*for shift key when screen is loading*/
var scrollLock = '0';  /*for scroll key to on & off light*/

// for backspace key....
function funcBas() {
    var xy = "";
    var valu = document.getElementById("demo1").innerHTML;
    var x = valu.length;
    var y = 1;
    var z = x - y;
    document.getElementById("demo1").innerHTML = valu.slice(0, z);
}

// for capsLock key....
function funccap() {
    if (capsLock == '0') {
        capsLock = '1';
        document.getElementById("circle").style.background = "rgb(140, 179, 14)";
    } else if (capsLock == '1') {
        capsLock = '0';
        document.getElementById("circle").style.background = "rgb(46, 45, 45)";
    }
}

// for shift key....
function funcSh() {
    if (shift == '0') {
        shift = '1';
    } else if (shift == '1') {
        shift = '0';
    }
}

// for clear key....
function funcDel() {
    var x = document.getElementById("demo1").innerHTML;
    var y = x.replace(x, "");
    document.getElementById("demo1").innerHTML = y;
}

function funcdel() {
    var x = document.getElementById('demo1').innerHTML;
    var y = x.replace(x, "");
    document.getElementById('demo1').innerHTML = y;
}
// for Enter key .....
function funcEnt() {
    document.getElementById("demo1").innerHTML += "</br>"
}

// for space key....
function funcsp() {
    document.getElementById("demo1").innerHTML += "  ";
}

// for cursor....
// function funcCur() {
//     var j = document.getElementById("demo1").innerHTML;
//     var k = j.split("");
// }

// Letter keys with capslock on and off....
// q 
function funcq() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "Q";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "q";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "q";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "Q";
        }
    }
}

// w 
function funcw() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "W";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "w";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "w";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "W";
        }
    }
}
// e 
function funce() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "E";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "e";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "e";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "E";
        }
    }
}
// r 
function funcr() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "R";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "r";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "r";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "R";
        }
    }
}
// t 
function funct() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "T";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "t";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "t";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "T";
        }
    }
}
// y 
function funcy() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "Y";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "y";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "y";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "Y";
        }
    }
}
// u 
function funcu() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "U";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "u";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "u";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "U";
        }
    }
}
// i 
function funci() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "I";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "i";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "i";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "I";
        }
    }
}
// o 
function funco() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "O";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "o";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "o";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "O";
        }
    }
}
// p 
function funcp() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "P";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "p";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "p";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "P";
        }
    }
}
// a 
function funca() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "A";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "a";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "a";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "A";
        }
    }
}
// s 
function funcs() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "S";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "s";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "s";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "S";
        }
    }
}

// d 
function funcd() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "D";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "d";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "d";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "D";
        }
    }
}

// f 
function funcf() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "F";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "f";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "f";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "F";
        }
    }
}

// g 
function funcg() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "G";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "g";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "g";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "G";
        }
    }
}

// h 
function funch() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "H";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "h";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "h";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "H";
        }
    }
}

// j 
function funcj() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "J";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "j";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "j";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "J";
        }
    }
}

// k 
function funck() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "K";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "k";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "k";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "K";
        }
    }
}

// l 
function funcl() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "L";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "l";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "l";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "L";
        }
    }
}
// z 

function funcz() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "Z";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "z";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "z";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "Z";
        }
    }
}

// x 
function funcx() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "X";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "x";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "x";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "X";
        }
    }
}

// c 
function funcc() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "C";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "c";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "c";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "C";
        }
    }
}

// v 
function funcv() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "V";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "v";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "v";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "V";
        }
    }
}

// b 
function funcb() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "B";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "b";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "b";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "B";
        }
    }
}

// n 
function funcn() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "N";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "n";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "n";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "N";
        }
    }
}

// m 
function funcm() {
    if (capsLock == '1') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "M";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "m";
        }
    } else if (capsLock == '0') {
        if (shift == '0') {
            document.getElementById("demo1").innerHTML += "m";
        } else if (shift == '1') {
            shift = '0';
            document.getElementById("demo1").innerHTML += "M";
        }
    }
}

// for numlock key .....
function funcNum() {
    if (numLock == '0') {
        numLock = '1';
        document.getElementById("circle1").style.background = "rgb(140, 179, 14)";
    } else if (numLock == '1') {
        numLock = '0';
        document.getElementById("circle1").style.background = "rgb(46, 45, 45)";
    }
}

// for numerical keys with numlock on and off .....
function func1() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "1";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func2() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "2";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func3() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "3";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func4() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "4";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func5() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "5";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func6() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "6";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func7() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "7";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func8() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "8";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func9() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "9";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}
function func0() {
    if (numLock == '1') {
        document.getElementById("demo1").innerHTML += "0";
    } else if (numLock == '0') {
        document.getElementById("demo1").innerHTML += "";
    }
}

// for symbol keys 
// [
function func11() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "[";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "{";
    }
}

// ]
function func12() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "]";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "}";
    }
}

// ;
function func13() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += ";";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += ":";
    }
}

// '
function func14() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "\'";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "\"";
    }
}

// \
function func15() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "\\";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "|";
    }
}

// ,
function func16() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += ",";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "\<";
    }
}

// .
function func17() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += ".";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "\>";
    }
}

// /
function func18() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "/";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "?";
    }
}

// for second row numbers keys 

// `
function func20() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "`";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "~";
    }
}

// 1
function func21() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "1";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "!";
    }
}

// 2
function func22() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "2";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "@";
    }
}

// 3
function func23() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "3";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "#";
    }
}

// 4
function func24() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "4";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "$";
    }
}

// 5
function func25() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "5";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "%";
    }
}

// 6
function func26() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "6";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "^";
    }
}

// 7
function func27() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "7";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "&";
    }
}

// 8
function func28() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "8";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "\*";
    }
}

// 9
function func29() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "9";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "(";
    }
}

// 0
function func30() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "0";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += ")";
    }
}

// -
function func31() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "-";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "_";
    }
}

// =
function func32() {
    if (shift == '0') {
        document.getElementById("demo1").innerHTML += "=";
    } else if (shift == '1') {
        shift = '0';
        document.getElementById("demo1").innerHTML += "+";
    }
}

// for individual arithmatic operators ... 
// / 
function funcDiv() {
    document.getElementById("demo1").innerHTML += "/";
}
// *
function funcMult() {
    document.getElementById("demo1").innerHTML += "\*";
}
// -
function funcSub() {
    document.getElementById("demo1").innerHTML += "-";
}
// +
function funcAdd() {
    document.getElementById("demo1").innerHTML += "+";
}

function funcScr() {
    if (scrollLock == '0') {
        scrollLock = '1';
        document.getElementById("circle3").style.background = "rgb(140, 179, 14)";
    } else if (scrollLock == '1') {
        scrollLock = '0';
        document.getElementById("circle3").style.background = "rgb(46, 45, 45)";
    }
}