const submitForm = document.querySelector('#submitform')

submitForm.addEventListener("submit", function(e){
	e.preventDefault()
	const Name=submitForm["name"].value
	const Phone=submitForm["phone"].value
	const Address=submitForm["address"].value
	const State=submitForm["state"].value
	const Order=submitForm["order"].value


	 rootRef.child(autoId +"/"+"product").set({
			 Name:Name,
			 Phone:Phone,
			 Address:Address,
			 State:State,
			 Order:Order
	     })
	 .then(()=>{
	 	Swal.fire("Order Successful")
	 })
	 .catch((err)=>{
	 	console.log(err)
	 })


})