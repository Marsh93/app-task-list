new Vue({
    el:'#appVue',
    data: {
        lists: [
            { keep: 'Salir a correr en la madrugadas', completed: false },
            { keep: 'Ducharse', completed: false },
            { keep: 'Aprender algo', completed: false },
        ],
        finishedList: [],
        deletedList: [],
        newKeep: '',
        search: {
            item: '', // item a buscar
        },
        editar: {
            item: '', //almacena el nombre de la tarea a editar
            index: '', // almacena la posición de la tarea que vamos a editar
        }
    },
    computed: {
        searchTasks: function () {
            return this.lists.filter( item => item.keep.includes(this.search.item) );
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

        // Método que termina una tarea y cambia el estado de una tarea al hacer click
        finishedKeep: function (index) {
            this.lists[index].completed = true;
            this.finishedList.unshift(this.lists[index]);
            this.lists.splice(index, 1);
        },

        // Método que almacena los datos a editar: nombre y posicion de la tarea
        activeEditKeep: function (index) {
            this.editar.item = this.lists[index].keep;
            this.editar.index = index;
        },

        // Método que edita el nombre la tarea
        editKeep: function () {
            this.lists[this.editar.index].keep = this.editar.item;
        },

        // Método para eliminar la tarea
        deleteKeep: function (index) {
            this.deletedList.push(this.lists[index]);
            this.lists.splice(index, 1);
        },

        // Regresa la tarea eliminada a la lista de tarea registradas
        undoTaskDeleted: function (index) {
            this.lists.push(this.deletedList[index]);
            this.deletedList.splice(index, 1);
        },

        // Regresa la tarea terminada a la lista de tarea registradas
        undoTaskFinished: function (index) {
            this.lists.push(this.finishedList[index]);
            this.finishedList.splice(index, 1);
        }
    },
});