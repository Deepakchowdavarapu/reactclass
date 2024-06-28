function AddtoCart(Product , cart , IncreaseQuantity , DecreaseQuantity){
    return(
       function(increase){
        if(increase){
            IncreaseQuantity(Product)
        }else{
            DecreaseQuantity(Product)

        }
        
       }
    )
}

export default AddtoCart;   

