function showPic(whichPic) {

    console.log("---------");
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src", source);
}
