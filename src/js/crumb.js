const transform = (() => {

    return {

        setCrumb(obj) {
            let html = '';
            html = `<a href="${obj.top.href}">${obj.top.id}</a> > <a href="${obj.second.href}">${obj.second.id}</a> > <a href="${obj.third.href}">${obj.third.id}</a> > <span>${obj.forth.id}</span>`
            document.querySelector('.crumb').innerHTML = html;
        }

    }

})();
