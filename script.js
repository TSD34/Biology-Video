function load() {
    for (var i = 0; i < data.length; i ++) {
        $(".result").append(element(data [i][0], data [i][1], data [i][2], data [i][3], data [i][4], i))
        if (data [i][4]) {
            $(".o" + i) [0].addEventListener(
                "click",
                {
                    t: i,
                    handleEvent: close
                }
            );
            $(".c" + i) [0].addEventListener(
                "click",
                {
                    t: i,
                    handleEvent: open
                }
            );
        }
    }
}
function element(t, u, v, w, x, y) {
    var result;
    if (x) {
        var text = w.split("\n")
        result = "<div><menu></menu><a href=\""
        result += t
        result += "\"><img src=\""
        result += u
        result += "\"></a>"
        result += "<h3><img src=\"https://tsddata.vercel.app/opened.svg\" class=\"o"
        result += y
        result += " o oc\"><img src=\"https://tsddata.vercel.app/closed.svg\" class=\"c"
        result += y
        result += " c oc\"><a href=\""
        result += t
        result += "\">"
        result += v
        result += "</a></h3><div class=\"detail d"
        result += y
        result += "\">"
        for (var i = 0; i < text.length; i ++) {
            result += "<p><b>"
            result += text [i]
            i ++
            result += "</b><menu></menu><p>"
            result += text [i]
            result += "</p><menu></menu>"
        }
        result += "</div></div>"
    } else {
        result = "<div><menu></menu><a href=\""
        result += t
        result += "\"><img src=\""
        result += u
        result += "\"></a>"
        result += "<h3>"
        result += v
        result += "</h3></div>"
    }
    return result;
}
function open(t) {
    $(".o" + this.t).css("display", "initial")
    $(".c" + this.t).css("display", "none")
    $(".d" + this.t).css("display", "initial")
}
function close(t) {
    $(".o" + this.t).css("display", "none")
    $(".c" + this.t).css("display", "initial")
    $(".d" + this.t).css("display", "none")
}
function send() {
    var element = document.createElement("script")
    element.src = $(".user") [0].value + "/" + $(".pass") [0].value + ".js"
    document.head.appendChild(element)
}
window.onload = function () {
    if (localStorage.TSDUser !== undefined) {
        const array = JSON.parse(localStorage.TSDUser)
        $(".user") [0].value = array [0];
        $(".pass") [0].value = array [1];
    }
}