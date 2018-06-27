Vue.component('NavBar', {
    props: ['logo', 'refs', 'armor'],
    template: '\
<nav class="navbar navbar-expand-lg navbar-dark bg-dark add-theme fixed-top">\
        <a class="navbar-brand" :href="logo.url">\
            <img :src="logo.img">\
        </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false"\
            aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="menu">\
            <ul class="nav navbar-nav mr-auto">\
                <li v-for="ref in refs" :key="ref.id" :ref="ref" class="nav-item ml-5" >\
                <a class="nav-link" :href="ref.url">{{ref.text}}</a>\
                </li>\
            </ul>\
            <ul class="navbar-nav">\
                <li class="nav-item">\
                    <a class="nav-link ml-5" :href="armor.url">{{armor.text}}</a>\
                </li>\
            </ul>\
        </div>\
    </nav>'
})

Vue.component('brand-footer', {
    props: ['labels', 'brand'],
    template: '\
    <div>\
    <hr/>\
    <img class="w-25 float-md-left" :src="brand.url1">\
    <img class="my-md-4 mx-3 w-25 float-md-left" :src="brand.url2">\
    <span class="text-justify">{{brand.text}}</span>\
    <hr />\
    <img v-for="label in labels" class="mr-3" :key="label.id" :src="label.url">\
    </div>'
})

new Vue ({
    el: '#footer',
    data: {
        brand: {url1: '../assets/bethesda-studios-icon-black.svg', url2: '../assets/bethesda-icon-black.svg', 
        text: 'Данный сайт является лабораторной работой и не используется с целью получения выгоды. Все графические изображения,\
        находящиеся на сайте были найдены в сети Интернет и имеют за собой право на свободное распространение.\
        Владельцами всех торговых марок и знаков являются Zenimax и Bethesda.'},
        labels: [
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
        logo: {img: '../assets/images1.png', url:'../index.html'},
        refs: [
            {id: 1, url: '../pages/news.html', text: 'Новости'},
            {id: 2, url: '../pages/about.html', text: 'О нас'},
            {id: 3, url: '../pages/contacts.html', text: 'Контакты'}
        ],
        armor: {url:'https://fluffyf1sh.github.io/Laboratory/shop.html', text: 'Силовая броня'}
    }
})