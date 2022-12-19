import React from 'react'
import './FooditemCard.css'
import './DrinkCard.css'
export default function DrinkCard(props) {

    console.log(props);
    return(
        <section>
		<div className="container">
			<div className="card1">
				<div className="content px-5">
				
					<div className="contentBx">
						<h3>{props.name}<span></span></h3>
						<p>{props.cal}<span> Calories</span></p>
					</div>
				</div>
			
			</div>
		</div>
        </section>
    )


}