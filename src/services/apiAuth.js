export async function registerUser(newUser) {
  const url = `https://prince-visual.onrender.com/api/v1/user`;
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, requestOptions);

  if (!res.ok) console.log("Res not ok");

  const data = await res.json();
  return data;
}
export async function loginUser(user) {
  const url = `https://prince-visual.onrender.com/api/v1/user/login`;
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, requestOptions);

  if (!res.ok) console.log("Res not okay");

  const data = await res.json();
  return data;
}
