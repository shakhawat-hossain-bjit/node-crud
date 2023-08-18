const Product = require("./Product/Product");


const main=()=>{
    const total=Product.getAll();
    // Product.add({
    //     name: "One Piece, Vol. 1",
    //     price: 9.99,
    //     stock: 124,
    //     author: "Eiichiro Oda"
    // })
    // let id=23
    // let findProduct=Product.getOneById(id);
    // console.log("Product with id", id, findProduct)
    Product.updateById(8,{ price:88, stock: 10000, isPremimum:true });

    // Product.deleteById(10)
}
 

main();