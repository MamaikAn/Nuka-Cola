Vue.component('NavItem', {
    props: ['links'],
    template: '<li class="nav-item ml-5">\
    <a class="nav-link" :href="links.url">{{links.text}}</a>\
</li>'
})

Vue.component('img-footer', {
    props: ['img'],
    template: '<img class="mr-3" :src="img.url">'
})

new Vue ({
    el: '#footer',
    data: {
        srcs: [
            {id: 1, url: '../assets/esrb.gif'},
            {id: 2, url: '../assets/pegi-18.svg'},
            {id: 3, url: '../assets/xbox-one-icon-black.svg'},
            {id: 4, url: '../assets/ps4-icon-black.svg'},
            {id: 5, url: '../assets/pc-icon-black.svg'}
        ]
    }
})

new Vue ({
    el: "#nav",
    data: {
        refs: [
            {id: 1, url: '../pages/news.html', text: 'Новости'},
            {id: 2, url: '../pages/about.html', text: 'О нас'},
            {id: 3, url: '../pages/contacts.html', text: 'Контакты'}
        ]
    }
})