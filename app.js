const Product = require("./Product/Product");


const main=()=>{
    const total=Product.getAll();
    Product.add({
        name: "One Piece, Vol. 1",
        price: 9.99,
        stock: 124,
        author: "Eiichiro Oda"
    })
    let findProduct=Product.getOneById(2);
    // console.log(singleProduct)
    Product.updateById(2,{ price:11.11, stock: 1000000000000000000000, isPremimum:true });
}
 

main();