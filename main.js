console.log(1);
const getData = (url1, url2) => {
    fetch(url1)
    .then(response => response.json())
    .then(data => sendData(data, url2));
};
const sendData = (obj, url) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
};
getData('db.json', 'https://jsonplaceholder.typicode.com/posts');