const fs = require("fs");
const { faker } = require("@faker-js/faker");

const products = [];

for (let i = 0; i < 500; i++) {
  const title = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  const code = faker.random.alphaNumeric(8);
  const stock = faker.random.numeric(3);
  const category = faker.commerce.department();
  const price = parseFloat(faker.commerce.price(10, 1000));
  const images = Array.from({ length: faker.random.numeric(1, 5) }).map(() => faker.image.animals(1234, 2345));
  const status = faker.datatype.boolean();

  products.push({
    title: title,
    description: description,
    code: code,
    stock: Number(stock),
    category: category,
    price: price,
    images: images,
    status: status,
  });
}

fs.writeFile("products.json", JSON.stringify(products), function (err) {
  if (err) throw err;
  console.log("Saved!");
});
