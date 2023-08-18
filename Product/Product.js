const fs=require("fs");

class Product{
    getAll(){
        // const data=fs.readFileSync("./data/manga.json");
        const data=fs.readFileSync("./data/manga.json","utf-8");
        // console.log(data);
        return JSON.parse(data);
    }

    add(product){
        const data=fs.readFileSync("./data/manga.json","utf-8")
        const jsonData= JSON.parse(data);

        let newProduct={...product, id:jsonData[jsonData.length-1].id+1};
        // console.log("The new Data is: ",newProduct)

        // const newJsonData=[...jsonData,newProduct]
        // console.log(newJsonData);
        jsonData.push(newProduct)
        // console.log(jsonData);

        fs.writeFileSync("./data/manga.json", JSON.stringify(jsonData))
        console.log("Successfully added product with id ");
    }

    getOneById(id){
        const data=fs.readFileSync("./data/manga.json","utf-8")
        const jsonData= JSON.parse(data);
        return jsonData.find(x=>x.id==id)
    }

    updateById(id, newInfo){
        const data=fs.readFileSync("./data/manga.json","utf-8")
        const jsonData= JSON.parse(data);

        let flag=0;
        let updatedJsonData=jsonData.map(x=>{
            if(x.id==id){
                flag=1;
                x={...x, ...newInfo}
                console.log(x);
            }
            return x;
        })

        if(flag==0){
            console.log("There is no such data with id ", id);
            return;
        }

        fs.writeFileSync("./data/manga.json",JSON.stringify(updatedJsonData));
        console.log("Successfully updated product with id ", id);
    }

    // deleteById(id)
}

module.exports=new Product();