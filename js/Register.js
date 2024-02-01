const url = "https://dev.jobkhuzi.com/api/user/registration/";

const formSubmit = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const password1 = event.target.password1.value;
  const password2 = event.target.password2.value;
  const parson = {
    username: username,
    email: email,
    password1: password1,
    password2: password2,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(parson),
  })
    .then((parson) => {
      return parson.json();
    })
    .then((data) => {
      console.log(data);
    });
};
