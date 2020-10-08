
namespace L00 {
    window.onload = function () {
        let sign = prompt("Gebe deinen Namen ein.");
        if (sign != null) {
            document.getElementById("name").innerHTML = "Moooooin " + sign;
        }
    }
}
