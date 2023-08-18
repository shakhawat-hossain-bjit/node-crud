const Product = require("./Product/Product");

const main = () => {
  const total = Product.getAll();
  // add
  //   Product.add({
  //     name: "One Piece, Vol. 1",
  //     price: 9.99,
  //     stock: 124,
  //     author: "Eiichiro Oda",
  //   });

  // find by id
  // let findProduct=Product.getOneById(23);
  // console.log("Product with id", findProduct)

  //  update by id
  //   Product.updateById(4, {
  //     price: 99,
  //     stock: 100,
  //     name: "New Manga ",
  //     isPremimum: true,
  //   });

  //  deleteById
  Product.deleteById(112);
};

main();
