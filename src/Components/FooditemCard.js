import React from 'react'
import './FooditemCard.css'
export default function FooditemCard(props) {

    return(
        <section>
		<div className="container">
			<div className="card">
				<div className="content">
					{/* <div className="imgBx">
						<img src="https://image.flaticon.com/icons/png/256/4213/4213641.png"/>
					</div> */}
					<div className="contentBx">
						<h3>{props.name}<span></span></h3>
						<p>{props.cal}<span> Calories</span></p>
						<p>{props.carbs}g<span> Carbohydrates</span></p>
						<p>{props.colestrol}mg<span> Cholesterol </span></p>
						<p>{props.sugar}g<span> Sugar</span></p>
						<p>{props.fat}g<span> Fat</span></p>
						<p>{props.protein}g<span> Protein</span></p>
					</div>
				</div>
				<button className="btn btn-success" onClick={()=>props.storeFood(true)}>Add</button>
			</div>
			
		</div>
        </section>
    )


}