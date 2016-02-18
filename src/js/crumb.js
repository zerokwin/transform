const transform = (() => {

    return {

        setCrumb(obj) {
            var span = document.createElement('span');
            var txt = document.createTextNode(obj.id);
            span.appendChild(txt);
            document.querySelector('.crumb').appendChild(span);
        }

    }

})();
