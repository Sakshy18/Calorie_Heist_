import React from 'react'
import './FooditemCard.css'
export default function DailyMealCard(props) {

   console.log(props.mealid);
    return(
        <section>
		<div className="container">
			<div className="card">
				<div className="content">
                <h4 className="card-title pb-2">{props.date}</h4>
                    
                   
					<div className="contentBx">
						<h3></h3>
						<p>{props.mealid}</p>
					</div>
				</div>
			
			</div>
		</div>
        </section>
    )


}