Vue.component('add-post', {
    props: ['news'],
    template: '\
    <form v-on:submit.prevent="newPost">\
<div class="row mt-3 form-group">\
        <div class="col">\
    <label class="d-lg-none d-block" for="inputTitle">Заголовок</label>\
    <input v-model="title" type="text" class="form-control" id="inputTitle" placeholder="Заголовок"></input>\
</div>\
</div>\
<div class="row mt-3 form-group">\
        <div class="col">\
    <label class="d-lg-none d-block" for="inputBodyUp">Текст к записи</label>\
    <textarea v-model="text" class="form-control" id="inputBodyUp" placeholder="Текст"></textarea>\
</div>\
</div>\
<div class="row mt-3 form-group">\
        <div class="col">\
    <label class="d-lg-none d-block" for="inputPicture">Картинка к записи</label>\
    <input type="file" class="form-control-file" id="inputPicture"></input>\
</div>\
</div>\
<div class="row mt-3 form-group">\
<div class="col">\
    <input class="btn btn-primary" type="submit" value="Отправить">\
</div>\
</div>\
</form>',
    data: function() {
        return {
            title: '',
            text: '',
        }
    },
    methods: {
    newPost: function() {
        this.news.unshift({
            title: this.title,
            author: 'by Admin',
            time: new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes(),
            bodyUp: this.text.slice(0, (Math.round(this.text.length/2))),
            bodyDown: this.text.slice(Math.round(this.text.length/2)),
            url: '../assets/php.png',
            comments: []
        })
        this.title = '',
        this.text = ''
        alert('Пост добавлен')
    },
}
})
Vue.component('edit-post', {
    props: ['newses'],
    template: `<div><select class="form-control mt-3" v-model="selected">
<option disabled value="">Выберите пост</option>
<option v-for="(news, index) in newses" :value="news">{{index}}. {{news.title}}</option>
</select>
<div v-if="selected!=''">
    <form v-on:submit.prevent="editPost" v-on:reset.prevent="deletePost">
<div class="row mt-3 form-group">
        <div class="col">
    <label for="inputTitle">Редактировать заголовок:</label>
    <input v-model="title" type="text" class="form-control" id="inputTitle"></input>
</div>
</div>
<div class="row mt-3 form-group">
        <div class="col">
    <label for="inputBodyUp">Редактировать текст к записи:</label>
    <textarea v-model="text" class="form-control" id="inputBodyUp"></textarea>
</div>
</div>
<div class="row mt-3 form-group">
        <div class="col">
    <label class="d-lg-none d-block" for="inputPicture">Картинка к записи:</label>
    <input type="file" class="form-control-file" id="inputPicture"></input>
</div>
</div>
<div class="row mt-3 form-group">
<div class="col">
    <input class="btn btn-primary" type="submit" value="Отправить">
    <input class="btn btn-danger" type="reset" value="Удалить">
</div>
</div>
</form>
<div class="text-center">
<button @click="show = !show" class="btn my-3 btn-primary">Показать комментарии</button>
<div v-if="show">
<div v-for="(comment, index) in selected.comments" class="row mx-2 my-3">
    <div class="col-2 px-0">
        <img class="w-100" src="../assets/avatar.png">
    </div>
    <div class="col d-flex flex-column text-justify" px-0>
        <span>{{comment.text}}</span>
        <button class="w-25 btn btn-danger" @click="deleteComment(index)">Удалить</button>
    </div>
</div>
</div>
</div>
</div>
</div>`,
data: function() {
    return {
        selected: '',
        text: '',
        title: '',
        post: '',
        show: false
    }
},
methods: {
    editPost: function() {
        Vue.set(this.post, 'bodyUp', this.text.slice(0, (Math.round(this.text.length/2)))),
        Vue.set(this.post, 'bodyDown', this.text.slice(Math.round(this.text.length/2)))
        alert('Пост изменен')
    },
    deletePost: function() {
        this.newses.splice(this.newses.indexOf(this.post), 1)
        this.selected=''
    },
    deleteComment: function(index) {
    this.selected.comments.splice(index, 1)
    }
},
watch: {
    selected: {
      handler() {
        this.text = this.selected.bodyUp + this.selected.bodyDown,
        this.title = this.selected.title,
        this.post = this.selected
      }
    }
     //vm.items[indexOfItem] = newValue  =>  Vue.set(vm.items, indexOfItem, newValue)
}
})