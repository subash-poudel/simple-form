const users = [
  {
    id: 1,
    name: "Sloth",
    email: "sloth@gmail.com",
    designation: "officer",
  },
  {
    id: 2,
    name: "Pride",
    email: "pride@gmail.com",
    designation: "senor officer",
  },
  {
    id: 3,
    name: "Wrath",
    email: "wrath@gmail.com",
    designation: "main boss",
  },
];

export const fetcher = (config: any) => {
  const {
    body: { username },
  } = config;
  const user = users.find((u) => u.email === username);
  if (user) {
    Promise.resolve(user);
  }
  return Promise.reject(new Error("User Not Found"));
};
