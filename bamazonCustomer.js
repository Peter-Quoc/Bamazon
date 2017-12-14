var mysql = require('mysql');
var inquirer = require('inquirer')

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: 'root',
	password: 'UTBootCampP@ssw0rd',
	database: 'bamazon'
});

connection.connect(function(err) {
  if (err) throw err;
  displayInventory();
});

function displayInventory(){
  var query = connection.query("SELECT * FROM products", function(error, results) {
	    if (error) throw error;
			results.forEach(function(results){
				console.log("------------------------------");
				console.log("Product ID: " + results.item_id + " Product Name: " + results.product_name + " Department: " + results.department_name + " Price: $" + results.price + " Stock Quantity: " + results.stock_quantity);
				console.log("------------------------------");
			});
			purchaseItem();
  });
}


function purchaseItem() {
  inquirer.prompt([{
      name: "productID",
      type: "input",
      message: "What is the Product ID of the item you want to purchase?",
			},
			{
			name: "quantity",
			type: "input",
			message: "How many do you want to buy?",
    	}]).then(function(answers){
				updateQuantity(answers.productID, answers.quantity);
	});
}

function updateQuantity(id, quantity){
	var query = connection.query("UPDATE products SET ? WHERE ?",
		[{
			var newStockQuantity = stock_quantity;
			newStockQuantity = newStockQuantity - quantity;
		},
		{
			item_id = id
		}],
		function(err, results) {
			displayInventory();
		});
}

function totalCost(){
	var query = connection.query(
		
	)
}
