
//Function to load data from CSV file and display it
function loadandDisplayData(){
    d3.dsv(",", "data/purchase_orders.csv", d3.autoType).then(data=>{
        const ul= d3.select("#purchse-orders-list");
        data.forEach(order =>{
            ul.append("li")
            .text('${order.customerName - Order ID: ${order.orderID} - Purchase Amount: ${order.purchaseAmount}');

        })
        .catch(error =>{
            console.error("Error loading CSV file:", error);
            
        })
    })
}