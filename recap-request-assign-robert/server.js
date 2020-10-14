const express = require("express");
const app = express();
//
let PORT = 5000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
//
//
//
let magicalfruits = [
  {
    id: "0",
    name: "mango",
    benefit:
      "mango flesh contains prebiotic dietary fibre, which helps feed good bacteria in the gut. Mangoes are rich in beta-carotene that helps in the production of Vitamin A. The powerful antioxidant helps improve vision, boosts overall eye health and even prevents age-related macular degeneration or loss of vision.",
  },
  {
    id: "1",
    name: "plantain",
    benefit:
      "Cooked plantains are nutritionally very similar to a potato, calorie-wise, but contain more of certain vitamins and minerals. They're a rich source of fiber, vitamins A, C, and B-6, and the minerals magnesium and potassium. ",
  },
  {
    id: "2",
    name: "maracuja",
    benefit:
      "Passion fruit has a low glycemic index (GI) and high fibre content (10.4%). This makes it a great fruit to maintain insulin levels for diabetics. -Fruits like passion fruit are high in fibre like pectin that can make you feel full without increasing the calorie intake",
  },
];

// linked to the 500 error
app.use(express.json());

//
//
app.get("/", (req, res) => {
  res.send("<h1>Assignement fruits</h1>");
});

/*

                 Setup two GET routes (one for getting all & one for getting one specific fruit)

*/

//MULT fruits  ---------------------
//
app.get("/magicalfruits", (req, res) => {
  console.log("Route /magicalfruits calledddddd");
  res.json(magicalfruits);
});

//  Single Fruit ---------------------
//
app.get("/magicalfruits/:id", (req, res) => {
  const { id } = req.params;
  console.log(`chekkk id sent to us: ${id}`);
  let fruit = magicalfruits.find((fruit) => fruit.id == id);

  res.json(fruit);
});
//
// --------------------------------

/*

                 Setup POST, PATCH, DELETE routes for changing fruits

                    //POST : create
                    //Get  : read
                    //Put  : Update/Replace
                    // Patch : Update/Modify
                    // Delete : Delete


*/
