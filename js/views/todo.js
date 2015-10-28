import moment from 'moment';

function todoTemplate(data) {
  
  let date = moment(data.createdAt).fromNow();

  return `
    <img src="${data.picture}">
    <ul>
      <li class='name'><i class="fa fa-user"></i>${data.Name}
      </li><br>
      <li class='name'><i class="fa fa-facebook-official"></i>  Vous appeler ${data.nickname}
      </li><br>
      <li class='name'><i class="fa fa-phone"></i>  ${data.phone}
      </li><br>
      <li class='name'><i class="fa fa-heart"></i>  ${data.Hobby}
      </li><br>
      <li class='name'><i class="fa fa-home"></i>  ${data.residence}
      </li><br>
      <li class='name'><i class="fa fa-glass"></i>  ${data.drinkofchoice}
      </li><br>
  `
}

export default todoTemplate;