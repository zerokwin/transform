'use strict';

var transform = function () {

    return {
        setCrumb: function setCrumb(obj) {
            var span = document.createElement('span');
            var txt = document.createTextNode(obj.id);
            span.appendChild(txt);
            document.querySelector('.crumb').appendChild(span);
        }
    };
}();