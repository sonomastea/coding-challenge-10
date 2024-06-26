
//Function to load data from CSV file and display it
function loadandDisplayData(){
    d3.dsv(",","data/purchase_orders.csv", d3.autoType).then(data=>{
        const ordersList= d3.select("#purchase-orders-list");
        .data(data)
        .enter()
        .append("li")
            .text(function)(d)('${order.customerName ,Order ID: ${order.orderID}  ,Purchase Amount: ${order.purchaseAmount}');

        })
        .catch(error =>{
            console.error("Error loading CSV file:", error);
            
        })
    }
