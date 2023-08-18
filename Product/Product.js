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
        console.log("Successfully added product");
    }

    getOneById(id){
        const data=fs.readFileSync("./data/manga.json","utf-8")
        const jsonData= JSON.parse(data);
        let res=jsonData.find(x=>x.id==id)
        // console.log("res   ", res);
        return res;
    }

    updateById(id, newInfo){
        //check if newInfo contains id property
        // console.log(newInfo)
        if(newInfo.hasOwnProperty('id')){
            console.log("id  property should not passed in object");
            return;
        }

        const data=fs.readFileSync("./data/manga.json","utf-8")
        const jsonData= JSON.parse(data);

        let flag=0;
        let updatedJsonData=jsonData.map(x=>{
            if(x.id==id){
                flag=1;
                x={...x, ...newInfo}
                // console.log(x);
            }
            return x;
        })

        // no product exists with this id
        if(flag==0){
            console.log("There is no such data with id ", id);
            return;
        }

        fs.writeFileSync("./data/manga.json",JSON.stringify(updatedJsonData));
        console.log("Successfully updated product with id ", id);
    }


    deleteById(id){
        const data=fs.readFileSync("./data/manga.json","utf-8")
        const jsonData= JSON.parse(data);
        let isExist=jsonData.find(x=>x.id==id)
        // console.log(isExist)
        if(isExist){
            let updatedJsonData=jsonData.filter(x=>{
                if(x.id!=id){
                   return x;
                }
            })
            // console.log(" delete ",updatedJsonData)
            fs.writeFileSync("./data/manga.json",JSON.stringify(updatedJsonData));
            console.log("Successfully deleted product with id ", id);
        }
        else{
            console.log("There is no such data with id ", id);
        }

    }
}

module.exports=new Product();