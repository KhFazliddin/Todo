import logo from './logo.svg';
import './assets/style/style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Todoitem from './components/Todoitem';
import Filter from './components/Filter';
import todo from './store/reducer/todo';
import { connect } from "react-redux";
import { completeTodo, completeAll, deleteTodo } from './store/action/todo';

function App({ todos, deleteTodo, completeAll, completeTodo, filter }) {
  return (
    <body>
      <section class="todoapp">
        <Header />
        <section class="main">
          <input id="toggle-all" class="toggle-all" type="checkbox" />
          <label onClick={completeAll} for="toggle-all">Mark all as complete</label>
          <ul class="todo-list">
            {
              todos.map(todo => {

                const item = <Todoitem
                  title={todo.title}
                  completed={todo.completed}
                  deleteTodo={() => deleteTodo(todo.id)}
                  completeTodo={() => {
                    completeTodo(todo.id)
                  }}
                />

                if (filter === 'active' && todo.completed === false) {
                  return item
                } else if (filter === 'completed' && todo.completed === true) {
                  return item
                } else if (filter === 'all') {
                  return item;
                }
              }
              )
            }
          </ul>
          <Filter />
        </section>
      </section>
      <Footer />
    </body>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  filter: state.todo.filter
});

const mapDispatchToProps = ({
  deleteTodo,
  completeAll,
  completeTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
