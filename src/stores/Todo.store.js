import mobx, { observable, action, computed } from 'mobx'

export default class TodoStore {
    
    /**
     * Liste des tâches à réaliser.
     */
    @observable
    todos = []
    
    /**
     * Ajoute une tâche
     * @param {Object} todo 
     */
    @action
    add(todo) {
        this.todos.push(todo)
    }

    /**
     * Supprime une tâche
     * @param {Object} todo 
     */
    @action
    remove(todo) {
        this.todos.remove(todo)
    }

    /**
     * Récupère le nombre de tâches
     */
    @computed 
    get numOfTodo() {
        return this.todos.length
    }
}