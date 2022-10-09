window.onload = function () {
    for (var i = 0; i < data.length; i ++) {
        $(".result").append(element(data [i][0], data [i][1], data [i][2], data [i][3]))
    }
}
function element(t, u, v, w) {
    var text = w.split("\n")
    var result = "<div><menu></menu><a href=\""
    result += t
    result += "\"><img src=\""
    result += u
    result += "\"><h3>"
    result += v
    result += "</h3></a>"
    for (var i = 0; i < text.length; i ++) {
        result += "<p><b>"
        result += text [i]
        i ++
        result += "</b><menu></menu><p>"
        result += text [i]
        result += "</p><menu></menu>"
    }
    result += "</div>"
    return result;
}