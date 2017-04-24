function query(url, titleDiv, contentDiv, callback) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            var json = JSON.parse(http.responseText);
            callback(titleDiv, contentDiv, json);
        }
    };
    http.open("GET", url, true);
    http.send();
}

function clear(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
    return node;
}

function toggleDiv(id) {
    var element = document.getElementById(id);
    if (element !== undefined) {
        if (element.style.display === 'none') {
            element.style.display = '';
    	} else {
            element.style.display = 'none';
    	}
    }
}
