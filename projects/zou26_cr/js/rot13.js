var Rot13 = {};
Rot13.ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
Rot13.ALL_CHARS_SIZE = Rot13.ALL_CHARS.length;
Rot13.SHIFT = Rot13.ALL_CHARS_SIZE / 2;

Rot13.rot13 = function (src) {
    var result = "";
    for (i = 0; i < src.length; i++) {
        var c = src[i];
        var pos = Rot13.ALL_CHARS.indexOf(c);
        if (pos >= 0) {
            var newPos = (pos + Rot13.SHIFT) % Rot13.ALL_CHARS_SIZE;
            var rot = Rot13.ALL_CHARS[newPos];
            result += rot;
        } else {
            result += c;
        }
    }
    return result;
};

Rot13.decEmail = function (src) {
    document.location.href = Rot13.rot13(src);
};

Rot13.chainFunctions = function (a, b) {
    return function() {
        if (a) {
            a()
        }
        if (b) {
            b()
        }
    }
};

Rot13.pageHandler = function () {
    var a = document.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        if (a[i].dataset.obfuscated === "true") {
            var b = a[i].getAttribute("href");
            if (b) {
                a[i].setAttribute("href", Rot13.rot13(b));
                a[i].removeAttribute("data-obfuscated");
                a[i].innerHTML = Rot13.rot13(b).substring(7);
            }
        }
    }
};

Rot13.addOnloadHandler = function (a) {
    if (window.addEventListener) {
        window.addEventListener('load', a, false)
    } else if (window.attachEvent) {
        window.attachEvent('onload', function() {
            return a.apply(window, new Array(window.event))
        })
    } else {
        window.onload = Rot13.chainFunctions(window.onload, a)
    }
};

jQuery(document).ready(Rot13.pageHandler);