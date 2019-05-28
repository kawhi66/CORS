import axios from 'axios';

const app = document.getElementById("app");
app.appendChild(btnFactory('GET /nonsupport/cors/get', {
    method: 'get',
    url: '/nonsupport/cors/get'
}))

app.appendChild(btnFactory('GET /support/cors/get', {
    method: 'get',
    url: '/support/cors/get'
}))

app.appendChild(btnFactory('POST /nonsupport/cors/post', {
    method: 'POST',
    url: '/nonsupport/cors/post'
}))

app.appendChild(btnFactory('POST /support/cors/post', {
    method: 'POST',
    url: '/support/cors/post'
}))

/**
 * @description button factory
 * @param {string} value button value
 * @param {object} opts ajax options
 */
function btnFactory(value, opts) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = value;
    btn.addEventListener('click', function () {
        const {
            method,
            url
        } = opts;

        axios({
            baseURL: 'http://localhost:3000',
            method,
            responseType: 'json',
            url
        }).then(function (response) {
            debugger
        }).catch(function (error) {
            debugger
        })
    });

    return btn
}