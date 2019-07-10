const input=['0001','0003','0005','0003'];

const database=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12} 
] ;    
   


//对输入数据id遍历，统计count,字典

var countListId=(input)=>{
   var idCountList={ };
   for(var i=0;i<input.length;i++){
       if(input[i] in idCountList){
        idCountList[input[i]]++;
       }else{
        idCountList[input[i]]=1;
       }
   }
   return idCountList;
   console.log(idCountList);
}

//得到完整数组对象
var getDetailByInput=(input,database)=>{
    var listItems=new Array();

    var idCountList=countListId(input);

    console.log(idCountList);
 
    for(var key in idCountList){   
        for(var k=0;k<database.length;k++){  
            if(key==database[k]["id"]){             
                 var list_form={ 
                     "id":key,
                     "name":database[k]["name"],
                     "price":database[k]["price"],
                     "count":idCountList[key] 
                 } 
                 listItems.push(list_form);
            }  
        }
    }
    return listItems;
    console.log(listItems);
}

//计算总金额
var countTotalItems=(input,database) =>{ 
    var listItems=getDetailByInput(input,database);
    var sum=0;
    for(let i=0;i<listItems.length;i++)  
    {
        sum+=(listItems[i]["price"])*(listItems[i]["count"])
    }
    return sum;   
    console.log(sum); 
}


//获取Receipt  
var getReceiptform=(input,database) =>{
    var listItems=getDetailByInput(input,database);

    var result="Receipt\n----------\n";

    for(var i=0;i<listItems.length;i++)
    {
          result=(result+listItems[i]["name"]+"     "+listItems[i]["price"]+"     "+listItems[i]["count"]+"\n");
    } 

    result=result+"----------\n"+"Price:"+countTotalItems(input,database);
    return result;  
    console.log(result); 
}

//输出receiption
var  PrintReceipt=(input,database)=>{
    if(countListId(input)==null) 
    {
        return "error";       
    }else{  
        return getReceiptform(input,database); 
    }
}

module.exports = [countListId,getDetailByInput, countTotalItems, getReceiptform,PrintReceipt];