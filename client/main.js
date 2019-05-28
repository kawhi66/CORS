import axios from 'axios';

const simple = document.getElementById("simple");
simple.appendChild(btnFactory('GET /cors/nonsupport', {
    method: 'get',
    url: '/cors/nonsupport'
}))

simple.appendChild(btnFactory('GET /cors/support', {
    method: 'get',
    url: '/cors/support'
}))

simple.appendChild(btnFactory('POST /cors/nonsupport', {
    method: 'post',
    url: '/cors/nonsupport'
}))

simple.appendChild(btnFactory('POST /cors/support', {
    method: 'post',
    url: '/cors/support'
}))

const notSimple = document.getElementById("not-so-simple");
notSimple.appendChild(btnFactory('POST /cors/nonsupport', {
    headers: {
        'X-Custom-Header': 'hello world'
    },
    method: 'post',
    url: '/cors/nonsupport'
}))

notSimple.appendChild(btnFactory('POST /cors/support', {
    headers: {
        'X-Custom-Header': 'hello world'
    },
    method: 'post',
    url: '/cors/support'
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
            headers,
            method,
            url
        } = opts;

        axios({
            baseURL: 'http://localhost:3000',
            headers,
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