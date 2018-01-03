var mysql = require('mysql');
var inquirer = require('inquirer')
var bamazonDB = []

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
				bamazonDB.push(results)
			});
			purchaseItem(results);
  });
}


function purchaseItem(results) {
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
				var buyQuantity = answers.quantity;
				var arrayIndex = parseInt(answers.productID) - 1;
				console.log("You are buying " + buyQuantity + " " + bamazonDB[arrayIndex].product_name + " at $" + bamazonDB[arrayIndex].price + " each.")
				updateQuantity(answers.productID, answers.quantity, arrayIndex);
	});
}

function updateQuantity(id, quantity, arrayIndex){
	var purchaseQuantity = parseInt(quantity);
	var newStockCount = bamazonDB[arrayIndex].stock_quantity - purchaseQuantity;
	var totalCost = bamazonDB[arrayIndex].price * quantity;
	if(newStockCount >= 0) {
	var query = connection.query("UPDATE products SET ? WHERE ?",
		[{
			stock_quantity: newStockCount
		},
		{
			item_id: parseInt(id)
		}],
		function(err, results) {
			if (err) throw err;
			console.log("You have ordered " + quantity + " " + bamazonDB[arrayIndex].product_name + ". Your total cost is: $" + totalCost);
			connection.end();
		});
	} else {
			console.log("Not enough " + bamazonDB[arrayIndex].product_name + " in stock.");
			connection.end();
	}
}
