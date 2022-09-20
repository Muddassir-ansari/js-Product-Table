var prodArr = []; //Product Array

document.getElementById("update_product").style.display = "none"; //Hide Update Button
document.getElementById("success").style.display = "none"; //Hide Success Notification
document.getElementById("error").style.display = "none"; //Hide Error Notification

$(document).ready(function () {
  //jQuery Ready Function
  $("#add_product").click(function () {
    var product_sku = $("#product_sku").val();
    var product_name = $("#product_name").val();
    var product_price = $("#product_price").val();
    var product_quantity = $("#product_quantity").val();

    var obj = {                          //Making object for storing all input values
      SKU: product_sku,
      Name: product_name,
      Price: product_price,
      Quantity: product_quantity,
    };

    if                                 //Implemention the all check requried
      (obj.SKU == "" && obj.Name == "" && obj.Price == "" && obj.Quantity == "") {
      $("#error").text("All field are empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.SKU == "") {
      $("#error").text("SKU field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.Name == "") {
      $("#error").text("Name field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.Price == "") {
      $("#error").text("Price field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (obj.Quantity == "") {
      $("#error").text("Quantity field is empty.");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (isNaN(obj.SKU)) {
      $("#error").text("SKU field should be integer");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (!isNaN(obj.Name)) {
      $("#error").text("Name field should be string");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (isNaN(obj.Price)) {
      $("#error").text("Price field should be integer");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else if (isNaN(obj.Quantity)) {
      $("#error").text("Quantity field should be integer");
      document.getElementById("error").style.display = "block";
      document.getElementById("success").style.display = "none";
    } else {
      prodArr.push(obj);
      console.log(prodArr);
      display();
    }
  });
});
function display() {
  document.getElementById("success").style.display = "block";
  document.getElementById("error").style.display = "none";
  var table =
    "<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
  prodArr.forEach((element) => {
    table +=
      '<tr id="row"><td>' +
      element.SKU +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      '</td><td><a href="#" onclick="edit(\'' +
      element.SKU +
      '\')">Edit</a> <a href="#" onclick="delProd(\'' +
      element.SKU +
      "')\">Delete</a></td></tr>";
  });
  table += "</table>";
  document.getElementById("product_list").innerHTML = table;
}
//Edit function
function edit(val) {
  document.getElementById("add_product").style.display = "none";
  document.getElementById("update_product").style.display = "block";

  for (let i = 0; i < prodArr.length; i++) {
    if (val == prodArr[i].SKU) {
      document.getElementById("product_sku").value = prodArr[i].SKU;
      document.getElementById("product_name").value = prodArr[i].Name;
      document.getElementById("product_price").value = prodArr[i].Price;
      document.getElementById("product_quantity").value = prodArr[i].Quantity;
      prodArr.splice(i, 1);
    }
  }

  display();
}
//Function for update the product list
function update() {
  document.getElementById("update_product").style.display = "none";
  document.getElementById("add_product").style.display = "block";

  var product_sku = $("#product_sku").val();
  var product_name = $("#product_name").val();
  var product_price = $("#product_price").val();
  var product_quantity = $("#product_quantity").val();
  var obj = {
    SKU: product_sku,
    Name: product_name,
    Price: product_price,
    Quantity: product_quantity,
  };

  if (
    //Implemention the all check requried
    obj.SKU == "" &&
    obj.Name == "" &&
    obj.Price == "" &&
    obj.Quantity == ""
  ) {
    $("#error").text("All field are empty.");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (obj.SKU == "") {
    $("#error").text("SKU field is empty.");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (obj.Name == "") {
    $("#error").text("Name field is empty.");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (obj.Price == "") {
    $("#error").text("Price field is empty.");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (obj.Quantity == "") {
    $("#error").text("Quantity field is empty.");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (isNaN(obj.SKU)) {
    $("#error").text("SKU field should be integer");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (!isNaN(obj.Name)) {
    $("#error").text("Name field should be string");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (isNaN(obj.Price)) {
    $("#error").text("Price field should be integer");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else if (isNaN(obj.Quantity)) {
    $("#error").text("Quantity field should be integer");
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else {
    prodArr.push(obj);
    console.log(prodArr);
    display();
  }
}

//Function for delete the item
function delProd(val) {
  for (let i = 0; i < prodArr.length; i++) {
    if (val == prodArr[i].SKU) {
      prodArr.splice(i, 1);
    }
  }
  display();
}