// THIS ARE ALL THE PERMISSION ROLES -----
const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};
// ---------------------------------------#
// if you notice each name has an specific ROLE 

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Kyle", role: ROLE.ADMIN },
    { id: 2, name: "Sally", role: ROLE.BASIC },
    { id: 3, name: "Joe", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Kyle's Project", userId: 1 },
    { id: 2, name: "Sally's Project", userId: 2 },
    { id: 3, name: "Joe's Project", userId: 3 },
  ],
};
