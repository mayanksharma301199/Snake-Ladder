{
    var n
    var count
    var deg = 60
    var countrnd = 0
    var my
    var myeye
    var my1
    var ls
    var ts
    var lsp
    var tsp
    var icnt
    var k1
    var ids
    var dis
    var imid
    var obj = [{ lf: 22, plf: 22, tp: -42, ptp: -42 }, { lf: 22, plf: 22, tp: -42, ptp: -42 }]
    var A = [{ x: 22, y: -235 }, { x: 598, y: -299 }, { x: 22, y: -555 },{x:534,y:-619},{x:342,y:-619}]
    var B = [{ x: 22, y: -107 }, { x: 278, y: -107 }, { x: 150, y: -491 }, { x: 534, y: -363 }, { x: 278, y: -235 }]
    var C = [{ x: 598, y: -42 }, { x: 406, y: -107 }, { x: 214, y: -107 }, { x: 470, y: -235 }, { x: 214, y: -427 }, { x: 406, y: -491 }]
    var D = [{ x: 534, y: -171 }, { x: 214, y: -491 }, { x: 86, y: -235 }, { x: 598, y: -363 }, { x: 86, y: -555 }, { x: 598, y: -555 }]
    function strt(k, i) {
        k1 = k
        var E
        var F
        if (k1 == 0) {
            E = A
            F = B
        }
        else {
            E = C
            F = D
        }
        ls = E[icnt].x
        ts = E[icnt].y
        lsp = F[icnt].x
        tsp = F[icnt].y
        if (ls == lsp) {
            document.getElementById(ids).style.marginLeft = ls + "px"
        }
        if (k1 == 0) {
            my1 = setInterval(function () {
                fun(i)
            }, 10);
        }
        else {
            my1 = setInterval(function () {
                fun1(i)
            }, 10);
        }
    }
    function cchk(kh, i) {
        var E
        if (kh == 0) {
            E = B
        }
        else {
            E = D
        }
        obj[i].plf = E[icnt].x
        obj[i].lf = obj[i].plf - 1
        obj[i].tp = E[icnt].y
        obj[i].ptp = obj[i].tp + 1
        if (i == 0) {
            ids = "goti1"
            dis = "di1"
            imid = "im1"
            my = setInterval(function () {
                dtdr(1)
            }, 50)
        }
        clearInterval(my1)
    }
    function fun(i) {
        if ((ls <= lsp)) {
            if (ls == lsp && ts == tsp) {
                cchk(0, i)
            }
            if (ls < lsp) {
                document.getElementById(ids).style.marginLeft = ls + "px"
                ls = ls + 1
            }
            if (ts != tsp) {
                document.getElementById(ids).style.marginTop = ts + "px"
                ts = ts + 1
            }
        }
        else if ((ls > lsp)) {
            if (ls == lsp && ts == tsp) {
                cchk(0, i)
            }
            if (ls >= lsp) {
                document.getElementById(ids).style.marginLeft = ls + "px"
                ls = ls - 1
            }
            if (ts != tsp) {
                document.getElementById(ids).style.marginTop = ts + "px"
                ts = ts + 1
            }
        }
    }
    function fun1(i) {
        if ((ls <= lsp)) {
            if (ls == lsp && ts == tsp) {
                cchk(1, i)
            }
            if (ls < lsp) {
                document.getElementById(ids).style.marginLeft = ls + "px"
                ls = ls + 1
            }
            if (ts != tsp) {
                document.getElementById(ids).style.marginTop = ts + "px"
                ts = ts - 1
            }
        }
        else if ((ls > lsp)) {
            if (ls == lsp && ts == tsp) {
                cchk(1, i)
            }
            if (ls >= lsp) {
                document.getElementById(ids).style.marginLeft = ls + "px"
                ls = ls - 1
            }
            if (ts != tsp) {
                document.getElementById(ids).style.marginTop = ts + "px"
                ts = ts - 1
            }
        }
    }
    function schk(k, i) {
        var snk = false
        var E
        if (k == 0) {
            E = A
        }
        else {
            E = C
        }
        for (var q = 0; q < E.length; q++) {
            if (obj[i].plf == E[q].x && obj[i].tp == E[q].y) {
                snk = true
                icnt = q
                break
            }
        }
        if (snk == true) {
            strt(k, i)
            return true
        }
        return false
    }
    function dtd() {
        var i
        if (count == n) {
            ids = "goti"
            dis = "di"
            imid = "im"
            i = 0
            my = setInterval(function () {
                dtdr(i)
            }, 50)
        }
    }
    function dtdr(i) {
        var rnd = getRndInteger()
        document.getElementById(dis).innerHTML = '<img id="' + imid + '" src="Alea_' + rnd + '.png">'
        document.getElementById(dis).style.transform = "rotate3d(1,0,0," + deg + "deg)"
        deg = deg + 60
        countrnd = countrnd + 1
        if (countrnd == 6) {
            countrnd = 0
            n = rnd
            count = 0
            var cdn = true
            var j = count
            var y = obj[i].plf
            if (obj[i].tp == -619) {
                for (var q = obj[i].plf; q >= 22; q--) {
                    if (q == y - 64) {
                        j = j + 1
                        y = q
                    }
                }
                if (j < n) {
                    cdn = false
                    count = n
                }
            }
            // tp==-42 tp==-107 tp==-171 tp==-235 tp==-299 tp==-363 tp==-427 tp==-491 tp==-555 tp==-619
            if (cdn == true) {
                if (obj[i].plf != 598 && (obj[i].tp == -42 || obj[i].tp == -171 || obj[i].tp == -299 || obj[i].tp == -427 || obj[i].tp == -555)) {
                    myeye = setInterval(function () {
                        func1(i)
                    }, 10);
                }
                else if (obj[i].plf == 598 && (obj[i].tp == -42 || obj[i].tp == -171 || obj[i].tp == -299 || obj[i].tp == -427 || obj[i].tp == -555)) {
                    myeye = setInterval(function () {
                        func2(i)
                    }, 10);
                }
                else if (obj[i].plf != 22 && (obj[i].tp == -107 || obj[i].tp == -235 || obj[i].tp == -363 || obj[i].tp == -491 || obj[i].tp == -619)) {
                    myeye = setInterval(function () {
                        func3(i)
                    }, 10);
                }
                else if (obj[i].plf == 22 && (obj[i].tp == -107 || obj[i].tp == -235 || obj[i].tp == -363 || obj[i].tp == -491 || obj[i].tp == -619)) {
                    myeye = setInterval(function () {
                        func4(i)
                    }, 10);
                }
            }
            clearInterval(my)
            if (cdn == false) {
                if (i == 0) {
                    ids = "goti1"
                    dis = "di1"
                    imid = "im1"
                    my = setInterval(function () {
                        dtdr(1)
                    }, 50)
                }
            }
        }
    }
    function getRndInteger() {
        return Math.floor(Math.random() * (6)) + 1;
    }
    function func1(i) {
        document.getElementById(ids).style.marginLeft = obj[i].lf + "px"
        if (obj[i].lf == obj[i].plf + 64) {
            count = count + 1
            obj[i].plf = obj[i].plf + 64
            if (count == n) {
                var a = schk(1, i)
                var b = schk(0, i)
                if (i == 0 && a == false && b == false) {
                    ids = "goti1"
                    dis = "di1"
                    imid = "im1"
                    my = setInterval(function () {
                        dtdr(1)
                    }, 50)
                }
                clearInterval(myeye)
            }
            else if (obj[i].lf == 598) {
                clearInterval(myeye)
                myeye = setInterval(function () {
                    func2(i)
                }, 10);
            }
        }
        obj[i].lf = obj[i].lf + 1
    }
    function func2(i) {
        document.getElementById(ids).style.marginTop = obj[i].tp + "px"
        if (obj[i].tp == obj[i].ptp - 64) {
            count = count + 1
            obj[i].ptp = obj[i].ptp - 64
            if (count == n) {
                var a = schk(1, i)
                var b = schk(0, i)
                if (i == 0 && a == false && b == false) {
                    ids = "goti1"
                    dis = "di1"
                    imid = "im1"
                    my = setInterval(function () {
                        dtdr(1)
                    }, 50)
                }
                clearInterval(myeye)
            }
            else {
                clearInterval(myeye)
                myeye = setInterval(function () {
                    func3(i)
                }, 10);
            }
        }
        obj[i].tp = obj[i].tp - 1
    }
    function func3(i) {
        document.getElementById(ids).style.marginLeft = obj[i].lf + "px"
        if (obj[i].lf == obj[i].plf - 64) {
            count = count + 1
            obj[i].plf = obj[i].plf - 64
            if (count == n) {
                var a = schk(1, i)
                var b = schk(0, i)
                if (i == 0 && a == false && b == false) {
                    ids = "goti1"
                    dis = "di1"
                    imid = "im1"
                    my = setInterval(function () {
                        dtdr(1)
                    }, 50)
                }
                clearInterval(myeye)
            }
            else if (obj[i].lf == 22) {
                clearInterval(myeye)
                myeye = setInterval(function () {
                    func4(i)
                }, 10);
            }
        }
        obj[i].lf = obj[i].lf - 1
    }
    function func4(i) {
        document.getElementById(ids).style.marginTop = obj[i].tp + "px"
        if (obj[i].tp == obj[i].ptp - 64) {
            count = count + 1
            obj[i].ptp = obj[i].ptp - 64
            obj[i].lf = 22
            obj[i].plf = 22
            if (count == n) {
                if (obj[i].tp == -554) {
                    obj[i].tp = obj[i].tp - 1
                }
                var a = schk(1, i)
                var b = schk(0, i)
                if (i == 0 && a == false && b == false) {
                    ids = "goti1"
                    dis = "di1"
                    imid = "im1"
                    my = setInterval(function () {
                        dtdr(1)
                    }, 50)
                }
            }
            clearInterval(myeye)
            if (count != n) {
                myeye = setInterval(function () {
                    func1(i)
                }, 10);
            }
        }
        obj[i].tp = obj[i].tp - 1
    }
}