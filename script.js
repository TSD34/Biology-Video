window.onload = function () {
    for (var i = 0; i < data.length; i ++) {
        $(".result").append(element(data [i][0], data [i][1], data [i][2], data [i][3], i))
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
function element(t, u, v, w, x) {
    var text = w.split("\n")
    var result = "<div><menu></menu><a href=\""
    result += t
    result += "\"><img src=\""
    result += u
    result += "\"></a>"
    result += "<h3><img src=\"https://tsddata.vercel.app/opened.svg\" class=\"o"
    result += x
    result += " o oc\"><img src=\"https://tsddata.vercel.app/closed.svg\" class=\"c"
    result += x
    result += " c oc\"><a href=\""
    result += t
    result += "\">"
    result += v
    result += "</a></h3><div class=\"detail d"
    result += x
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