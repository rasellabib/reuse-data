const url = "https://dev.jobkhuzi.com/api/user/login";

const formSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const parson = {
    email: email,
    password: password,
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
