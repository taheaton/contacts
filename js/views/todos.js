

function proccessData(data) {
  return data.map(function(item) {
    return `
    
      <li class='todo-list-item' data-todo-id="${item.objectId}">${item.Name}</li><hr>
    
    `
  }).join('');
}

function todosTemplate(data) {
  return `
    <h2>Ma Evil (but really nice) Homies<br>Call my podgies, they be cheezin'</h2>
    <ul>${proccessData(data)}</ul>
  `;
}

export default todosTemplate