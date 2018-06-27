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

Vue.component('block-about', {
    props: ['prop'],
    template: '\
    <div class="row mb-5">\
    <div class="col-md-4">\
        <img class="w-100" :src="prop.pic">\
    </div>\
    <div class="col-md">\
        <h3 class="text-center my-3">{{prop.title}}</h3>\
        <p class="text-justify">{{prop.bodyUp}}</p>\
        <p class="text-justify">{{prop.bodyDown}}</p>\
        <h6 v-if="prop.h6===true" class="text-center mt-4">Возможно присутствие голубоватого свечения в моче\
         после приема из-за входящего в состав напитка изотопа стронция.</h6>\
    </div>\
    </div>'
})

new Vue({
    el: '#all',
    data: {
        colas: [
            {
                id: 1, pic: '../assets/sorts/quantum.jpg', title: 'Квантовая Ядер-Кола', h6:true,

                bodyUp: 'Наша лучшая формула! Содержит в себе сразу 18 фруктовых вкусов! Такого вы не пробовали еще нигде!\
            Вдвое больше цвета, вдвое больше кофеина и вдвое больше вкуса! Вы заметите ее даже издалека благодаря\
            ее светящимся свойствам.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 2, pic: '../assets/sorts/victory.jpg', title: 'Ядер-Кола Виктория',

                bodyUp: 'Необычный вкус, необычный цвет... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis\
            scelerisque. Maecenas ultricies mi eget mauris pharetra. Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 3, pic: '../assets/sorts/quartz.jpg', title: 'Кварцевая Ядер-Кола',

                bodyUp: 'Прозрачный напиток с белым оттенком. С помощью Кварцевой Ядер Колы вы сможете видеть даже в темноте.\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\
            labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies\
            mi eget mauris pharetra.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 4, pic: '../assets/sorts/cherry.jpg', title: 'Вишневая Ядер-Кола',

                bodyUp: 'Ядер-Кола со вкусом вишни... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
            tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque.\
            Maecenas ultricies mi eget mauris pharetra. Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 5, pic: '../assets/sorts/grape.jpg', title: 'Ядер-Кола со вкусом винограда',

                bodyUp: 'Необычный вкус, необычный цвет... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis\
            scelerisque. Maecenas ultricies mi eget mauris pharetra. Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 6, pic: '../assets/sorts/orange.jpg', title: 'Ядер-Кола со вкусом апельсина',

                bodyUp: 'Необычный вкус, необычный цвет... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis\
            scelerisque. Maecenas ultricies mi eget mauris pharetra. Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 7, pic: '../assets/sorts/wild.jpg', title: 'Дикая Ядер-Кола',

                bodyUp: 'Ядер-Кола с вашим любимым ромом... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis\
            scelerisque. Maecenas ultricies mi eget mauris pharetra. Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'}

        ],

        workers: [
            {
                id: 1, pic: '../assets/mr.jpg', title: 'Мистер-Храбрец', h6:false,

                bodyUp: 'Наш надеждый защитник и сортировщик.... Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis\
            scelerisque. Maecenas ultricies mi eget mauris pharetra.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 2, pic: '../assets/protectron.jpg', title: 'Протектрон',

                bodyUp: 'Несмотря на то, что его главная цель - защита, он так же отлично заменяет человека во всем... Lorem\
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 3, pic: '../assets/bottly.jpg', title: 'Bottly',

                bodyUp: 'Одно из главных лиц Nuka World. Его олицетворение. Неподалеку должен быть Cappy... Lorem ipsum dolor\
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\
            aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi eget mauris pharetra.\
            Lectus proin nibh nisl condimentum.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 4, pic: '../assets/Cappy.png', title: 'Cappy',

                bodyUp: 'Второе главное лицо Nuka World. Говорят, что встреча с ним ведет к богатству... Lorem ipsum dolor\
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\
            aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi eget mauris pharetra.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'},

            {
                id: 5, pic: '../assets/robobrain.jpg', title: 'Робомозг',

                bodyUp: '>Это наш мозг, правда роботизированный... и слегка маринованный. Но это не мешает ему вести основную\
            мозговую деятельность на нашем производстве Lorem ipsum dolor sit amet, consectetur adipiscing\
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis\
            enim lobortis scelerisque.',

                bodyDown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\
            et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque. Maecenas ultricies mi\
            eget mauris pharetra. Lectus proin nibh nisl condimentum. Felis bibendum ut tristique et egestas\
            quis. Viverra adipiscing at in tellus integer. Et tortor consequat id porta. Nec sagittis aliquam\
            malesuada bibendum arcu vitae elementum. Tellus in hac habitasse platea dictumst vestibulum.\
            Feugiat nisl pretium fusce id velit. Adipiscing elit pellentesque habitant morbi tristique senectus\
            et netus. Interdum posuere lorem ipsum dolor sit. Eget est lorem ipsum dolor sit.'}
        ]
    }
})

new Vue({
    el: '#footer',
    data: {
        srcs: [
            { id: 1, url: '../assets/esrb.gif' },
            { id: 2, url: '../assets/pegi-18.svg' },
            { id: 3, url: '../assets/xbox-one-icon-black.svg' },
            { id: 4, url: '../assets/ps4-icon-black.svg' },
            { id: 5, url: '../assets/pc-icon-black.svg' }
        ]
    }
})

new Vue({
    el: "#nav",
    data: {
        refs: [
            { id: 1, url: '../pages/news.html', text: 'Новости' },
            { id: 2, url: '../pages/about.html', text: 'О нас' },
            { id: 3, url: '../pages/contacts.html', text: 'Контакты' }
        ]
    }
})