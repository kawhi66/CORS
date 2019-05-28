import axios from 'axios';

const btnGet = document.getElementById('btn-get');
const onBtnGetClick = function () {
    axios({
        baseURL: 'http://localhost:3000',
        method: 'get',
        responseType: 'json',
        url: '/'
    }).then(function (response) {
        debugger
    }).catch(function (error) {
        debugger
    });
}

btnGet.addEventListener('click', onBtnGetClick)

const btnPost = document.getElementById('btn-post');
const onBtnPostClick = function () {
    axios({
        baseURL: 'http://localhost:3000',
        method: 'post',
        responseType: 'json',
        url: '/post'
    }).then(function (response) {
        debugger
    }).catch(function (error) {
        debugger
    });
}

btnPost.addEventListener('click', onBtnPostClick)