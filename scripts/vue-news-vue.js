
var newsArray = new Vue ({
    el: '#news',
    data: {
        message: '',
        newses: [
            {title: 'Новый торговый автомат', author: 'by Admin', time: '01.05.2018 13:36', url: '../assets/newss.jpg',

            bodyUp: 'Представляем вашему вниманию наш новый торговый автомат с холодильником! Теперь Ядер-Кола будет всегда встречать вас своим леденящим объятием. Скоро во всех штатах.\
            Всем известно, что нет на планете такого человека, которому бы нравился вкус теплой разгазированной\
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
                {text: 'Очень интересная статья! Спасибо! Устал носить с собой домой Ядер-Колу, чтобы охладить.'},
                {text: 'Согласен с предыдущим комментатором. Очень рад, что Ядер-Кола прислушивается к к нам.'}
            ]
        },

            {title: 'Крышко-мина!', author: 'by Admin', time: '30.04.2018 18:28', url: '../assets/news22.jpg', 
            
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
                {text: 'Супер-класс! Обожаю оружие. У меня уже есть идеи, куда это можно применить...'},
                {text: 'Не уверен, что это поспособствует миру во всем мире. Но выживать же как-то нужно.'}
            ]
        },

            {title: 'Теперь на 50% меньше радиации!', author: 'by Admin', time: '10.04.2018 09:07', url: '../assets/news33.jpg', 
            
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
                {text: 'У меня так брат умер. С тех пор не пью вашу Ядер-Колу. Но наверное сейчас можно попробовать..'},
                {text: 'Погодите. А она радиоактивна? Теперь стало понятно, откуда у меня выросла из живота третья рука'}
            ]
        },

            {title: 'Фирменные футболки!', author: 'by Admin', time: '02.04.2018 21:57', url: '../assets/news4.jpg', 
            
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
                {text: 'Хороший мерч. Однозначно куплю. Уверен, будет круто смотреться под силовой броней.'},
                {text: 'Жаль, что у вас нет интернет-магазина, я бы уже сейчас прикупил ее. Живу далеко...'}
            ]
        }
        ],
        login : '',
        password : '', //Данная часть + methods предназначена для страница "Кабинет".
        waitCheck: true
    },
    methods: {
        check: function() {
            if (this.login==='admin' & this.password==='admin') {
                this.waitCheck = false,
                alert('Добро пожаловать!')
            }
        }
    },
    created() {
        if (localStorage.getItem('newses')) this.newses = JSON.parse(localStorage.getItem('newses'));
      },
      watch: {
        newses: {
          handler() {
            localStorage.setItem('newses', JSON.stringify(this.newses));
          },
          deep: true,
        },
      },
})

