Vue.component('NewsSaleCol', {
    props: ['post'],
    template: '\
    <div class="news-col col-md">\
    <img class="mw-100 mb-2" :src="post.url">\
        <h3 class="text-center text-md-left">{{ post.title }}</h3>\
        <p class="text-justify">{{ post.body }}</p>\
    </div>\
        '
})

Vue.component('heading', {
    props: ['head'],
    template: '<h3 class="add-theme my-4 text-center py-1 align-middle"> {{ head.title }} </h3>'
})

Vue.component('advantages', {
    props: ['advantage'],
    template: '<div><h3 class="text-center text-md-left"> {{ advantage.title }} </h3>\
    <p class="text-justify">{{ advantage.body }}</p></div>'
})

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

Vue.component('contact', {
    props: ['links'], 
    template: '<div>\
    <div class="col mb-4">\
        <a :href="links.url1">\
            <img :src="links.img1">\
            <span class="ml-2 align-middle">{{links.text1}}</span>\
        </a>\
    </div>\
    <div class="d-none d-md-block w-100"></div>\
    <div class="col mb-4">\
        <a :href="links.url2">\
            <img :src="links.img2">\
            <span class="ml-2 align-middle">{{links.text2}}</span>\
        </a>\
    </div>\
    </div>'
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
        brand: {url1: 'assets/bethesda-studios-icon-black.svg', url2: 'assets/bethesda-icon-black.svg', 
        text: 'Данный сайт является лабораторной работой и не используется с целью получения выгоды. Все графические изображения,\
        находящиеся на сайте были найдены в сети Интернет и имеют за собой право на свободное распространение.\
        Владельцами всех торговых марок и знаков являются Zenimax и Bethesda.'},
        labels: [
            {id: 1, url: 'assets/esrb.gif'},
            {id: 2, url: 'assets/pegi-18.svg'},
            {id: 3, url: 'assets/xbox-one-icon-black.svg'},
            {id: 4, url: 'assets/ps4-icon-black.svg'},
            {id: 5, url: 'assets/pc-icon-black.svg'}
        ]
    }
})

new Vue ({
    el: "#contacts",
    data: {
        refs: [
            {id: 1, url1: 'https://vk.com/mamaikan', text1: 'Мы в Вконтакте', img1: 'assets/vk.png',  url2: 'https://twitter.com/Mamaik_An', text2: 'Мы в Twitter', img2: 'assets/twitter.png' },
            {id: 2, url1: '#', text1: 'Мы в Playstation Network', img1: 'assets/playstation.png', url2: 'https://steamcommunity.com/id/MamaikAn', text2: 'Мы в Steam', img2: 'assets/steam.png' }
        ]
    }
})

new Vue ({
    el: "#nav",
    data: {
        logo: {img: 'assets/images1.png', url:'index.html'},
        refs: [
            {id: 1, url: 'pages/news.html', text: 'Новости'},
            {id: 2, url: 'pages/about.html', text: 'О нас'},
            {id: 3, url: 'pages/contacts.html', text: 'Контакты'}
        ],
        armor: {url:'https://fluffyf1sh.github.io/Laboratory/shop.html', text: 'Силовая броня'}
    }
})

new Vue({
    el: '#adv',
    data: {
        advantages: [
            { id: 1, title: 'Самый популярный напиток на всем континенте!', body: 'Популярнейшая на всей территории Америки, Ядер-Кола, так горячо любимая вами, вот уже несколько сотен лет не перестает радовать и удивлять! Спустя столетия, многие из тех, кто уже дожил до преклонного возраста, до сих пор помнят свой первый глоток классической Ядер-колы. Этот вкус невозможно забыть! Да что уж там! Несмотря на наличие ядерных осадков, отсутствие газов и теплой температуры газировки, ее вкус и качество до сих пор ценится людьми! Это подтверждают множественные опросы, в которых принимали участие люди всех возрастов. Даже те, кто никогда не пробовал насладиться этим освежающим, утомительно сладким напитком, попробовав, влюбляются в нее с первого же глотка! ' },
            { id: 2, title: 'Самое большое видовое и вкусовое разнообразие', body: 'Вдвое больше цвета, вдвое больше кофеина и вдвое больше вкуса! Наши сотрудники постоянно усовершенствуют имеющуюся формулу и смешивают различные вкусовые добавки для получения идеального вкуса. Мы хотим,чтобы каждый покупатель смог найти свой любимый вкус Ядер-Колы, поэтому представляем вам огромное видовое разнообразие. Кроме изобретения ваших любимых вкусов, мы так же занимаемся добавлением ваших любимых алкогольных напитков в нашу колу, что делает ее не только вкусной, но и в некотором смысле расслабляющей.' }
        ]
    }
})

new Vue({
    el: '#news-sales',
    data: {
        heads: [
            { id: 1, title: 'Новости' },
            { id: 2, title: 'Акции' },
            { id: 3, title: 'Мы на связи' }
        ],
        newses: [
            { id: 1, url: 'assets/newss.jpg', title: 'Новый торговый автомат', body: 'Представляем вашему вниманию наш новый торговый автомат с холодильником! Теперь Ядер-Кола будет всегда встречать вас своим леденящим объятием. Скоро во всех штатах.' },
            { id: 2, url: 'assets/news22.jpg', title: 'Крышко-мина!', body: 'Вы не можете разделять понятия ядерного оружия и Ядер-Колы? Теперь и не нужно! Представляем вам нашу новейшую разработку: Крышко-мину! Ба-бах! Теперь, когда ваш враг наступит на эту мину, ему не только оторвет ногу, но и покроет его труп горой крышек! Что может быть лучше, чем смерть врага? Конечно, его смерть и ваше богатство!' },
            { id: 3, url: 'assets/news33.jpg', title: 'Теперь на 50% меньше радиации!', body: 'Наша новейшая формула позволит вам пить Ядер-Колу и не умирать от лучевой болезни... Ну, или чуть дольше не умирать.' }
        ],
        sales: [
            { id: 1, url: 'assets/sale1.jpg', title: 'Вы жаждете приключений и много крышек?', body: 'Мы рады сообщить об открытии нового парка развлечений Nuka-World! Вас ждут незабываемые эмоции, море развлечений и несметные богатства! А так же ваши любимые напарники - Bottle и Cappy! Кроме того, приобретая билеты до 1 января, у вас есть уникальная возможность купить два билета по цене одного! Разве это не подарок?' },
            { id: 2, url: 'assets/sale2.jpg', title: 'Примерьте силовую броню на себе уже сегодня!', body: 'Вам не хватает острых ощущениях? Вы всегда мечтали попробовать на себе роль солдата в центре боевых действий? Приезжайте в парк развлечений Nuka-World и опробуйте на себе роль тематического солдата всего за 9.99$/мин! Настоящая силовая броня T-51! Что может быть круче, чем фотографии вас в силовой броне? Ваши друзья вас и не узнают!' },
        ]
    }
})
