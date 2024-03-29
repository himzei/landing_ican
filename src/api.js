const BASE_PATH =
  "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app/api/v1";

export async function consultingList() {
  return await fetch(`${BASE_PATH}/consulting`).then((response) =>
    response.json()
  );
}

export async function handleConsulting({
  name,
  email,
  tel,
  category,
  message,
}) {
  return await fetch(`${BASE_PATH}/consulting/writeIcan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "아이캔 행사지원",
      name,
      email,
      tel,
      category,
      message,
    }),
  }).then((response) => response.json());
}

export async function usernameSignUp({ username, email, password, password2 }) {
  return await fetch(`${BASE_PATH}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      password2,
    }),
  }).then((response) => response.json());
}

export async function usernameLogin({ email, password }) {
  return await fetch(`${BASE_PATH}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => response.json());
}

export async function accessToken() {
  return await fetch(`${BASE_PATH}/users/accessToken`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => response.json());
}

export async function refreshToken() {
  return await fetch(`${BASE_PATH}/users/refreshToken`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => response.json());
}

export async function loginSuccess() {
  return await fetch(`${BASE_PATH}/users/login/success`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => response.json());
}

export async function logout() {
  return await fetch(`${BASE_PATH}/users/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => response.json());
}
