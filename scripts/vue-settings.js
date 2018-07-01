var check = new Vue ({
    el: '#userbox',
    data: {
        login : '',
        password : '',
        waitCheck: true
    },
    methods: {
        check: function() {
            if (this.login==='admin' & this.password==='admin') {
                this.waitCheck = false,
                alert('Добро пожаловать!')
            }
        }
    }
})