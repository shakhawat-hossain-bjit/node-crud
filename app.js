const Manga = require("./Manga/Manga");

const main = () => {
  const allManga = Manga.getAll();
  // console.log("all data ", allManga);

  // add a manga
  Manga.add({
    name: "One Piece, Vol. 1",
    price: 9.99,
    stock: 124,
    author: "Eiichiro O",
  });

  // find by id
  // let findManga = Manga.getOneById(2);
  // console.log(findManga);

  //  update by id
  // Manga.updateById(12, {
  //   price: 99,
  //   stock: 100,
  //   name: "New Manga ",
  //   isPremimum: true,
  // });

  //  deleteById
  // Manga.deleteById(12);
};

main();
