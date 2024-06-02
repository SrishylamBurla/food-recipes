import React from "react";

const Products =({data})=>{
    return(
        <div>
            <div className="row">
               {data.map(data=>
               <div class="col-md-3">
                   <div class="card" style={{ width: '18rem', margin:'5px' }}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
                    <div class="body">
                <center style={{padding:'10px'}}>
                    <h5 class="card-title">{data.recipe.label}</h5>
                    <p class="card-text"> Total Amount of Calories :{Math.round(data.recipe.calories)}</p>
                    <a href="#" class="btn btn-primary">Buy</a>
                </center>
                </div>
                 </div> 
                
              </div>
               )}
        </div>
    </div>
    )
}

export default Products