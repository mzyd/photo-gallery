// 通用型函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}

// 通用型函数
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement || !document.createTextNode || !document.getElementById) return false;
    if (!document.getElementById("image_gallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/1.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var desc = document.createElement("p");
    desc.setAttribute("id", "description");
    var txt = document.createTextNode("Choose an image");
    desc.appendChild(txt);

    var gallery = document.getElementById("image_gallery");
    insertAfter(placeholder, gallery);
    insertAfter(desc, placeholder);
}

function prepareGallery() {
    // if not supports this two methods , end it.
    if (!document.getElementsByTagName || !document.getElementById) return false;
    if (!document.getElementById("image_gallery")) return false;
    var gallery = document.getElementById("image_gallery");
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        };
        // links[i].onkeypress = links[i].onclick;
    }
}

function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return true;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    if (placeholder.nodeName != "IMG")  return false;
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var desc = document.getElementById("description");
        if (desc.firstChild.nodeValue == 3) {
            desc.firstChild.nodeValue = text;
        }
    }
    return true;
}



addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
