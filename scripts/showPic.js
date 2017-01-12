function showPic(whichPic) {

    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var text = whichPic.getAttribute("title");
    var desc = document.getElementById("description");
    desc.firstChild.nodeValue = text;

}

// function countBodyChildren() {
//     // 这里返回的数组里面是 body 且只有一个 body, 所以需要取第0个元素
//     var bodyElement = document.getElementsByTagName("body")[0];
//     console.log("--------->", bodyElement.childNodes.length);
// }

// window.onload = countBodyChildren;
