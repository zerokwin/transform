'use strict';

var transform = function () {

    return {

        // setCrumb(obj) {
        //     let html = '';
        //     html = `<a href="/index.html">首页</a> > <a href="${obj.second.href}">${obj.second.id}</a> > <a href="${obj.third.href}">${obj.third.id}</a> > <span>${obj.forth.id}</span>`
        //     document.querySelector('.crumb').innerHTML = html;
        // }

        setCrumb: function setCrumb(obj) {
            var span = document.createElement('span');
            var txt = document.createTextNode(obj.id);
            span.appendChild(txt);
            document.querySelector('.crumb').appendChild(span);
        }
    };
}();