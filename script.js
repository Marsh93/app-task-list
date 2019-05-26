new Vue({
    el:'#appVue',
    data: {
        lists: [],
        newKeep: '',
    }, 
    methods: {
        addKeep: function () {
            this.lists.push(
                { keep: this.newKeep, completed:false }
            );
            this.newKeep = '';
        },
        changeState: function (index) {
            this.lists[index].completed = !this.lists[index].completed;
        }
    },
});