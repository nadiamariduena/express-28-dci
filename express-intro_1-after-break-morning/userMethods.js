exports.getAllUsers = (req, res) => {
  const users = [
    {
      id: "0",
      name: "üpppppStevedd",
      email: "steveed@blah.com",
    },
    {
      id: "1",
      name: "Nahla",
      email: "nahla@blah.com",
    },
    {
      id: "2",
      name: "Cloud",
      email: "cloud@blah.com",
    },
  ];

  res.send(users);
};
