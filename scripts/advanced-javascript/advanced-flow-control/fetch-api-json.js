async function fetchUserData(id) {
  if (!id) {
    throw new Error('id is mandatory');
  } else {
    const getInfo = await fetch(`https://dummyjson.com/users/${id}`);
    const getPosts = await fetch(`https://dummyjson.com/users/${id}/posts`);
    const getTodos = await fetch(`https://dummyjson.com/users/${id}/todos`);
    return ({
      info: await getInfo.json(),
      posts: await getPosts.json(),
      todos: await getTodos.json(),
    });
  }
}

fetchUserData(1).then((result) => {
  document.querySelector('.bio__name').innerText = result.info.firstName;
  console.log(result.info.firstName);
});
