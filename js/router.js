import Backbone from 'backbone';
import $ from 'jquery';

import TodosCollection from './todos_collection';

import homeTemplate from './views/home';
import todosTemplate from './views/todos';
import todoTemplate from './views/todo';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "todos" : "showTodos",
    "todos/:id" : "showSpecificTodo",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.todos = new TodosCollection();

    let router = this;

    this.$el.on('click', '.todo-list-item', function(event) {
      let $li = $(event.currentTarget);
      var todoId = $li.data('todo-id');
      router.navigate(`todos/${todoId}`);
      router.showSpecificTodo(todoId);
    });
  },

  home: function() {
    console.log('show home page');
    this.$el.html( homeTemplate() );
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showSpecificTodo: function(todoId) {
    let todo = this.todos.get(todoId);

    if (todo) {
      // todos have fetched and we grabbed the one we want
      this.$el.html( todoTemplate(todo.toJSON()) );
    } else {
      // todos not fetched so we need to load the one we want
      let router = this;
      todo = this.todos.add({objectId: todoId});
      this.showSpinner();
      todo.fetch().then(function() {
        router.$el.html( todoTemplate(todo.toJSON()) );
      });
    }

  },

  showTodos: function() {
    console.log('show todos page');
    
    this.showSpinner();

    var router = this;

    this.todos.fetch().then(function(){

      router.$el.html( todosTemplate(router.todos.toJSON()) );

    });

  },

  showAbout: function() {
    console.log('show about page');
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;