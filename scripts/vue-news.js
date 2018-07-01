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
    props: ['comments', 'url', 'message'],
    template: '<div class="col-md order-xl-2 order-2 order-md-1 animate fadeInRightBig">\
    <div class="container-fluid overflow">\
        <comment-list v-for="comment in comments" :key="comment.id" :comment="comment" :img="url"></comment-list>\
    </div>\
        <form v-on:submit.prevent="newcom" class="mt-xl-0 pt-3 pt-xl-0">\
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
                    <textarea v-model="mutableMessage" class="form-control form-control-sm" id="inputText" placeholder="Ваше сообщение"></textarea>\
                </div>\
            </div>\
            <div class="row form-group text-center">\
                <div class="col">\
                    <input class="btn btn-primary" type="submit" value="Отправить">\
                </div>\
            </div>\
        </form>\
    </div>',
    data: function () {
        return {
            mutableMessage: this.message
        }
    },
    methods: {
        newcom: function() {
            this.comments.push({
                id: this.comments.length + 1,
                text: this.mutableMessage
            })
            this.mutableMessage = ''
        }
    }
})

Vue.component('news-block', {
    props: ['url', 'news', 'message'],
    template: '<div><h3 class="add-theme my-4 text-center py-1 align-middle">{{news.title}}</h3>\
<div class="container-fluid news">\
    <div class="row mb-xl-3 mb-0">\
        <div class="col-md-7 animate fadeInLeftBig">\
            <img class="mw-100 mb-2 mb-md-0" :src="news.url">\
        </div>\
        <div class="col-md animate fadeInRightBig">\
            <h3 class="text-center">{{news.author}} {{news.time}}</h3>\
            <p class="text-justify">{{news.bodyUp}}</p>\
        </div>\
    </div>\
    <div class="row text-justify">\
    <comment-block :comments="news.comments" :url="url" :message="message"></comment-block>\
        <div class="col-xl-8 col-md-5 order-xl-1 order-1 order-md-2 animate fadeInLeftBig">\
            <p>{{news.bodyDown}}\
            </p>\
        </div>\
    </div>\
</div>\
</div>'
})

