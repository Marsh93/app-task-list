new Vue({
    el:'#appVue',
    data: {
        lists: [],
        newKeep: '',
        editar: {
            item: '',
            index: '',
        }
    }, 
    methods: {
        // Método que agrega una nueva tarea
        addKeep: function () {
            this.lists.push(
                { keep: this.newKeep, completed:false }
            );
            this.newKeep = '';
        },
        // Método que cambia el estado de una tarea al hacer click
        changeState: function (index) {
            this.lists[index].completed = !this.lists[index].completed;
        },
        // Método para editar tarea
        activeEditKeep: function (index) {
            this.editar.item = this.lists[index].keep;
            this.editar.index = index;
        },
        editKeep: function () {
            this.lists[this.editar.index].keep = this.editar.item;
        },
        // Método para eliminar la tarea
        deleteKeep: function (index) {
            this.lists.splice(index, 1);
        }
    },
});