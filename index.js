const SERVER_URL = 'http://127.0.0.1:8000';

const showModal = () => {
    let modal = document.getElementById('modal');
    modal.style.display = 'flex';
    modal.style.animation = 'fadein 2s';
}
const closeModal = () => {
    let modal = document.getElementById('modal');
    modal.style.animation = 'fadeout 2s';
    setTimeout(() => modal.style.display = 'none', 2000);
}

async function postArticle(article) {
  let token = getCookie('access_token'); 
  let response = await fetch(`${SERVER_URL}/blog/article${id}`,{
    method: 'PUT',
    body: JSON.stringify(article),
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  let data = await response.json();
  return data
}
async function getArticle(id) {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
    let data = await response.json();
    return data;
  }
  
  async function getArticles() {
      let response = await fetch(`${SERVER_URL}/blog/article`);
      let data = await response.json();
      return data;
    }
  
  async function submitArticle() {
      let article = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
      }
      let result = await postArticle(article);
      console.log(result);
  }
  
  async function insertArticle(id) {
      let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
      let data = await getArticle(id);
      let title = document.getElementById('title');
      let content = document.getElementById('content');
      title.innerText = data.title;
      content.innerText = data.content;
  }
  

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
  }
