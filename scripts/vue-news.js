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

Vue.component('comment-list', {
    props: ['comment', 'img'],
    template: '\
<div class="row my-3">\
    <div class="col-2 px-0">\
        <img class="w-100" :src="img">\
    </div>\
    <div class="col" px-0>\
        <span>{{comment.text}}</span>\
    </div>\
</div>'
})

Vue.component('comment-block', {
    props: ['comments', 'url'],
    template: '<div class="col-md order-xl-2 order-2 order-md-1">\
    <div class="container-fluid">\
        <comment-list v-for="comment in comments" :key="comment.id" :comment="comment" :img="url"></comment-list>\
    </div>\
        <form class="mt-xl-0 pt-3 pt-xl-0">\
            <div class="form-row">\
                <div class="col-lg form-group">\
                    <label for="inputName" class="d-lg-none d-block">Ваше имя</label>\
                    <input class="form-control form-control-sm" type="text" id="inputName" placeholder="Ваше Имя">\
                </div>\
                <div class="col-lg form-group">\
                    <label for="inputEmail" class="d-lg-none d-block">Ваш Email</label>\
                    <input class="form-control form-control-sm" type="email" id="inputEmail" placeholder="Ваш Email">\
                </div>\
            </div>\
            <div class="row form-group">\
                <div class="col">\
                    <label for="inputText" class="d-lg-none d-block">Ваше сообщение</label>\
                    <textarea class="form-control form-control-sm" id="inputText" placeholder="Ваше сообщение"></textarea>\
                </div>\
            </div>\
            <div class="row form-group text-center">\
                <div class="col">\
                    <input class="btn btn-primary" type="submit" value="Отправить">\
                </div>\
            </div>\
        </form>\
    </div>'
})

Vue.component('news-block', {
    props: ['url', 'news'],
    template: '<div><h3 class="add-theme my-4 text-center py-1 align-middle">{{news.title}}</h3>\
<div class="container-fluid news">\
    <div class="row mb-xl-3 mb-0">\
        <div class="col-md-7">\
            <img class="mw-100 mb-2 mb-md-0" :src="news.img">\
        </div>\
        <div class="col-md">\
            <h3 class="text-center">{{news.author}} {{news.time}}</h3>\
            <p class="text-justify">{{news.bodyUp}}</p>\
        </div>\
    </div>\
    <div class="row text-justify">\
    <comment-block :comments="news.comments" :url="url"></comment-block>\
        <div class="col-xl-8 col-md-5 order-xl-1 order-1 order-md-2">\
            <p>{{news.bodyDown}}\
            </p>\
        </div>\
    </div>\
</div>\
</div>'
})

new Vue ({
    el: '#news',
    data: {
        url: '../assets/avatar.png',
        newses: [
            {id: 1, title: 'Новый торговый автомат', author: 'by Admin', time: '01.05.2018 13:36', img: '../assets/newss.jpg',

            bodyUp: 'Всем известно, что нет на планете такого человека, которому бы нравился вкус теплой разгазированной\
            Ядер-Колы. Мы просто не могли оставаться в стороне и наконец нашли решение данной проблемы. Представляем\
            вашему вниманию наш новый торговый автомат с холодильником! Вам больше не нужно держать Ядер-Колу\
            в холодильнике, в ожидании ее охлаждения. Теперь Ядер-Кола будет всегда встречать вас своим леденящим\
            объятием уже в момент покупки!\
            Но и это еще не все. Новый дизайн? Да, вы совершенно верно заметили. Наши новые торговые автоматы\
            претерпели редизайн и очень сильно видоизменились. Но дело не только в красоте: таким образом,\
            мы хотим, что бы вы сразу могли понять, в каком аппарате есть встроенный холодильник. Мы честны\
            перед нашими покупателями и не будем скрывать наличие или отсутствие холодильника. Мы стараемся\
            над тем, чтобы предоставлять вам только лучшие продукты и сервис. Lorem ipsum dolor sit amet,\
            consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie\
            ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum,\
            a efficitur ex porttitor id. Nullam sem nibh, consectetur et fermentum eu, suscipit quis metus.\
            Aenean eget lacinia risus. Suspendisse tempus lectus at augue ultrices, a molestie diam vehicula.', 

            bodyDown:'Donec eget tristique dolor adipiscing elit. Aliquam ac mollis sem. Cras at nunc et ligula lacinia\
            convallis. Suspendisse euismod dui eget eros lobortis aliquam. Sed vitae orci sit amet tellus\
            auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos\
            himenaeos.Vivamus augue sem, ullamcorper at dui id, suscipit luctus justo. Cras vitae commodo\
            sapien. Nulla eu malesuada quam. Duis ac malesuada tortor. Pellentesque vel velit augue. Ut non\
            elit in urna convallis pellentesque. Sed non nibh non est sagittis luctus nec non felis. Donec\
            consectetur ante a porttitor dictum. Class aptent taciti sociosqu ad litora torquent per conubia\
            nostra, per inceptos himenaeos. Integer nec lacus in orci feugiat accumsan. Vestibulum quis varius\
            turpis, sed euismod erat. Скоро во всех штатах нашей страны. P.S. Наличие аппаратов в Убежищах не предусмотрено и не гарантируется.\
            О возможности установки или смены аппарата на новый, узнавайте у местных подразделений Ядер-Колы.',

            comments: [
                {id: 1, text: 'Очень интересная статья! Спасибо! Устал носить с собой домой Ядер-Колу, чтобы охладить.'},
                {id: 2, text: 'Согласен с предыдущим комментатором. Очень рад, что Ядер-Кола прислушивается к к нам.'}
            ]
        },

            {id: 2, title: 'Крышко-мина!', author: 'by Admin', time: '30.04.2018 18:28', img: '../assets/news22.jpg', 
            
            bodyUp: 'Вы не можете разделять понятия ядерного оружия и Ядер-Колы? Теперь и не нужно! Представляем вам нашу\
            новейшую разработку: Крышко-мину! Ба-бах! Теперь, когда ваш враг наступит на эту мину, ему не\
            только оторвет ногу, но и покроет его труп горой крышек! Что может быть лучше, чем смерть врага?\
            Конечно, его смерть и ваше богатство!\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet\
            ipsum malesuada, molestie ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam\
            malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam sem nibh, consectetur et fermentum\
            eu, suscipit quis metus. Aenean eget lacinia risus. Suspendisse tempus lectus at augue ultrices,\
            a molestie diam vehicula. Donec eget tristique. Lorem ipsum dolor sit amet, consectetur adipiscing\
            elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie ante at, commodo tortor.\
            Donec a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur ex porttitor\
            id. Nullam sem nibh, consectetur et fermentum eu, suscipit quis metus. Aenean eget lacinia risus.\
            Suspendisse tempus lectus at augue ultrices, a molestie diam vehicula. Donec eget tristique ',
            
            bodyDown:'dolor adipiscing elit. Aliquam ac mollis sem. Cras at nunc et ligula lacinia convallis. Suspendisse\
            euismod dui eget eros lobortis aliquam. Sed vitae orci sit amet tellus auctor finibus. Class\
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Vivamus\
            augue sem, ullamcorper at dui id, suscipit luctus justo. Cras vitae commodo sapien. Nulla eu\
            malesuada quam. Duis ac malesuada tortor. Pellentesque vel velit augue. Ut non elit in urna convallis\
            pellentesque. Sed non nibh non est sagittis luctus nec non felis. Donec consectetur ante a porttitor\
            dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\
            Integer nec lacus in orci feugiat accumsan. Vestibulum quis varius turpis, sed euismod erat.\
            Скоро во всех штатах нашей страны. P.S. Наличие мин в Убежищах не предусмотрено и не гарантируется.\
            О возможности доставки или покупки оптом, узнавайте у местных подразделений Ядер-Колы.',

            comments: [
                {id: 1, text: 'Супер-класс! Обожаю оружие. У меня уже есть идеи, куда это можно применить...'},
                {id: 2, text: 'Не уверен, что это поспособствует миру во всем мире. Но выживать же как-то нужно.'}
            ]
        },

            {id: 3, title: 'Теперь на 50% меньше радиации!', author: 'by Admin', time: '10.04.2018 09:07', img: '../assets/news33.jpg', 
            
            bodyUp: 'Наша новейшая формула позволит вам пить Ядер-Колу и не умирать от лучевой болезни... Ну, или чуть\
            дольше не умирать.\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet\
            ipsum malesuada, molestie ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam\
            malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam sem nibh, consectetur et fermentum\
            eu, suscipit quis metus. Aenean eget lacinia risus. Suspendisse tempus lectus at augue ultrices,\
            a molestie diam vehicula. Donec eget tristique. Lorem ipsum dolor sit amet, consectetur adipiscing\
            elit. Aliquam ac mollis sem. Mauris sit amet ipsum malesuada, molestie ante at, commodo tortor.\
            Donec a libero ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur ex porttitor\
            id. Nullam sem nibh, consectetur et fermentum eu, suscipit quis metus. Aenean eget lacinia risus.\
            Suspendisse tempus lectus at augue ultrices, a molestie diam vehicula. Donec eget tristique ', 
            
            bodyDown:'dolor adipiscing elit. Aliquam ac mollis sem. Cras at nunc et ligula lacinia convallis. Suspendisse\
            euismod dui eget eros lobortis aliquam. Sed vitae orci sit amet tellus auctor finibus. Class\
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Vivamus\
            augue sem, ullamcorper at dui id, suscipit luctus justo. Cras vitae commodo sapien. Nulla eu\
            malesuada quam. Duis ac malesuada tortor. Pellentesque vel velit augue. Ut non elit in urna convallis\
            pellentesque. Sed non nibh non est sagittis luctus nec non felis. Donec consectetur ante a porttitor\
            dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\
            Integer nec lacus in orci feugiat accumsan. Vestibulum quis varius turpis, sed euismod erat.\
            Скоро во всех штатах нашей страны. P.S. Наличие Ядер-Колы в Убежищах не предусмотрено и не гарантируется.\
            О возможности доставки или покупки оптом, узнавайте у местных подразделений Ядер-Колы.',

            comments: [
                {id: 1, text: 'У меня так брат умер. С тех пор не пью вашу Ядер-Колу. Но наверное сейчас можно попробовать..'},
                {id: 2, text: 'Погодите. А она радиоактивна? Теперь стало понятно, откуда у меня выросла из живота третья рука'}
            ]
        },

            {id: 4, title: 'Фирменные футболки!', author: 'by Admin', time: '02.04.2018 21:57', img: '../assets/news4.jpg', 
            
            bodyUp: 'Мы рады сообщить вам о поступлении на продажу наших фирменных футболок. Хочешь, чтобы все знали о\
            твоей любви к Ядер-Коле? Достаточно просто показаться на людях в этой футболке, чтобы люди смогли\
            понять, что вы истинный фанат Ядер-Колы. А еще футболка светится в темноте! Мы не считаем, что\
            это связанно с тем, что она лежала рядом с радиоактивными отходами, поэтому можем дать вам гарантию!\
            Мы гарантируем вам, что вы не умрете при ношении футболки в течение года. В противном случае,\
            мы вернем вам деньги!\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac mollis sem. Mauris sit amet\
            ipsum malesuada, molestie ante at, commodo tortor. Donec a libero ut nunc imperdiet auctor. Etiam\
            malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam sem nibh, consectetur et fermentum\
            eu, suscipit quis metus. Aenean eget lacinia risus. Suspendisse tempus lectus at augue ultrices,\
            a molestie diam vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac\
            mollis sem. Mauris sit amet ipsum malesuada, molestie ante at, commodo tortor. Donec a libero\
            ut nunc imperdiet auctor. Etiam malesuada ultrices ipsum, a efficitur ex porttitor id. Nullam\
            sem nibh, consectetur et fermentum eu, suscipit quis metus. Aenean eget lacinia risus. Suspendisse\
            tempus lectus at augue ultrices, a molestie diam vehicula. Donec eget tristique ',
            
            bodyDown:'dolor adipiscing elit. Aliquam ac mollis sem. Cras at nunc et ligula lacinia convallis. Suspendisse\
            euismod dui eget eros lobortis aliquam. Sed vitae orci sit amet tellus auctor finibus. Class\
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Vivamus\
            augue sem, ullamcorper at dui id, suscipit luctus justo. Cras vitae commodo sapien. Nulla eu\
            malesuada quam. Duis ac malesuada tortor. Pellentesque vel velit augue. Ut non elit in urna convallis\
            pellentesque. Sed non nibh non est sagittis luctus nec non felis. Donec consectetur ante a porttitor\
            dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\
            Integer nec lacus in orci feugiat accumsan. Vestibulum quis varius turpis, sed euismod erat.\
            Скоро во всех штатах нашей страны. P.S. Наличие футболок в Убежищах не предусмотрено и не гарантируется.\
            О возможности доставки или покупки оптом, узнавайте у местных подразделений Ядер-Колы.',

            comments: [
                {id: 1, text: 'Хороший мерч. Однозначно куплю. Уверен, будет круто смотреться под силовой броней.'},
                {id: 2, text: 'Жаль, что у вас нет интернет-магазина, я бы уже сейчас прикупил ее. Живу далеко...'}
            ]
        }
        ],
    }
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