const countListId = require('../main')[0];
const getDetailByInput = require('../main')[1];
const countTotalItems = require('../main')[2];
const getReceiptform = require('../main')[3];
const PrintReceipt = require('../main')[4];


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


//测试1：统计ID count 
 const count={"0001":1,"0003":2,"0005":1};
it('should return true when countListId equal exceptedresult', () => {
    expect(countListId(input)).toStrictEqual(count);
}); 

//测试2：获取订单条目完整信息包括数量count 
const lists=[{id: "0001", name: "Coca Cola", price: 3, count: 1},
             {id: "0003", name: "Pepsi-Cola", price: 5, count: 2},
             {id: "0005", name: "Dr Pepper", price: 7, count: 1}
]
it('should return true when getDetailByInput equal exceptedresult', () => {
    expect(getDetailByInput(input,database)).toStrictEqual(lists);
});


//测试3：统计total
it('should return true when countTotalItems equal exceptedresult', () => {
    expect(countTotalItems(input,database)).toStrictEqual(20);
});

//测试4：生成Receiipt
const receiptforn=`Receipt
----------
Coca Cola     3     1
Pepsi-Cola     5     2
Dr Pepper     7     1
----------
Price:20`;

it('should return true when getReceiptform equal exceptedresult', () => {
    expect(getReceiptform(input,database)).toStrictEqual(receiptforn);
});

//测试5：打印Receipt
it('should return true when PrintReceipt equal exceptedresult', () => {
    expect(PrintReceipt(input,database)).toStrictEqual(receiptforn);
});


module.exports = [countListId,getDetailByInput, countTotalItems, getReceiptform,PrintReceipt];
