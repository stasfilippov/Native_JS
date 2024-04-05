const todoLists = [
  {
    id: "1",
    title: "To Do List 1",
    filter: "all",
  },
  {
    id: "2",
    title: "To Do List 2",
    filter: "active",
  },
];

const tasks = {
  [todoLists[0].id]: [
    {id: 1, title: "Task 1", completed: false},
    {id: 2, title: "Task 2", completed: true},
  ],
  [todoLists[1].id]: [
    {id: 3, title: "Task 3", completed: false},
    {id: 4, title: "Task 4", completed: true},
  ],
};


console.log(tasks);

const addTodoList = (title) => {
    const todoListId = crypto.randomUUID()

    const newTodo = {
        id: todoListId,
        title: title,
        filter: "all",
    }

    const newStateTodoLists = [newTodo,...todoLists]

    const nextTasksState = {...tasks, [todoListId]: []}
}

const deleteTodoList = (todoListId) => {
    const newStateTodoLists = todoLists.filter(todo => todo.id !== todoListId)

    const copyTasksState = { ...tasks }

    delete copyTasksState[todoListId]

    const nextTasksState = copyTasksState
}

const addTask = (todoListId, title) => {
    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
    }

    const stateTasksTodolist = tasks[todoListId]
    const nextStateTasksTodolist = {
        ...tasks,
        [todoListId]: [...stateTasksTodolist, newTask]
    }
}

const changeTask = (todoListId, id, newTitle) => {
    const todoTask = tasks[todoListId].map(task => task.id === id ? {...task, title: newTitle} : task)

    const nextStateTasksTodolist = {
        ...tasks,
        [todoListId]: todoTask
    }
}

//-==-=--=--=--=--=--=--=--=--=--=-
const someTodoLists = [
    {
      id: "1",
      title: "To Do List 1",
      filter: "all",
    },
    {
      id: "2",
      title: "To Do List 2",
      filter: "active",
    },
  ];


const todoListObj = {}

for (let i = 0; i < someTodoLists.length; i++) {
    todoListObj[someTodoLists[i].id] = {
        title: someTodoLists[i].title,
        filter: someTodoLists[i].filter,
    }

    // delete todoListObj[someTodoLists[i].id].id;
}

console.log(todoListObj);

const myObj = someTodoLists.reduce((acc, el) => {
    acc[el.id] = el
    delete acc[el.id].id;
    return acc
}, {})

//!-==- Домашка Как с помощью reduce найти сумму всех элементов массива [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

