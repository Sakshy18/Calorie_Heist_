import React from 'react'
import image from "../images/walkingimg.png"
import img2 from "../images/blog2.jpg"
import img3 from "../images/homepagebg1.jpg"
import img4 from "../images/blog4.jpg"

export default function Blog() {
    return (
    <div className="mx-5 px-5">
        <h2 className="py-4 text-center">BLOGS</h2>


        <div className="card mb-5">
            <h3 className="card-title pt-4 pb-2 text-center">10 Reasons to Walk Every Day</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={image} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 card-body">
                    
                    <p class="card-text">Walking is one of the healthiest activities you can do. Putting one foot in front of the other has been consistently proven to benefit everything from blood pressure and weight control to your mood. And, because it only requires a pair of shoes and space to move, it’s one of the easiest workouts to accomplish.</p>
                    <p>Whether you’re walking specifically for exercise, commuting to work or choosing the stairs over the elevator, you’re on the right track. All that’s left is to make it a consistent habit. To that end, here are 10 great reasons to walk every day.</p>
                    <h5>IT ESTABLISHES A ROUTINE</h5>
                    <p>One of the most difficult aspects of working out is simply showing up. Getting out the door can feel daunting, but once you string together consistent workouts, they will become part of your routine. Research suggests that it takes about 66 days to form a habit. Going for a walk every morning or taking a stroll after dinner every night will put you on the path to long-term success.</p>
                </div>
             </div>
        </div>  

        <div className="card mb-5">
            <h3 className="card-title pt-4 pb-2 text-center">The Big Rocks That Make a Difference for Weight Loss</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img2} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 card-body">
                    
                    <p class="card-text">When you’re trying to lose weight, it’s easy to get caught up in the specifics: exactly which foods you should eat, precisie meal timing, and whether white rice is better than brown. The thing is, it’s usually the fundamentals that make the biggest difference in weight loss, experts say.</p>
                    
                    <p>One way to think about it is to imagine your time as a jar. If you have rocks, pebbles and sand, and you want to fill up the jar as quickly as possible, you’re going to use the rocks, right? Those are the key habits that are going to make the biggest difference in getting you toward your goals. “Many people tend to focus on the minutiae of weight loss and latch onto intensive and restrictive diets as a means for quick weight loss,” explains Claudia Hleap, a registered dietitian. “The problem with taking the ‘sand’ and ‘pebbles’ approach is that spending time and energy focusing on all these various restrictions is not often sustainable.”</p>
                    <p>Many people find that by focusing on the “big rocks,” they get better long-term results, and their efforts feel more doable over time. That’s why we asked nutrition pros what the big rocks of weight loss are in their experience with the thousands of people they’ve worked with. Here’s what they said.</p>
                </div>
             </div>
        </div> 

        <div className="card mb-5">
            <h3 className="card-title pt-4 pb-2 text-center">Dietitian Tips for Navigating the Holiday Table</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img3} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 card-body">
                    
                    <p class="card-text">Holidays can be challenging for many reasons — the stress, family dynamics, travel and even the food. Hear me out — holiday food is delicious and special. But, if I had a nickel for every client who came into our sessions with worries about how to eat during the holidays, I would have a lot of nickels. And that’s because, along with the cookie recipes, cocktail parties and family dinners, there’s diet culture messaging declaring you “bad” for enjoying holiday treats. Or, the only way to be “good” and stay on your diet is to restrict foods or exercise like crazy to “make up” for a holiday meal. I am here to say: enough of that. Here are my tips for how to enjoy holiday meals with as little nonsensical diet culture influence as possible.</p>
                    <h5>EAT CONSISTENTLY</h5>
                    <p>One of the most important things you can do for your body during the holidays (and all days) is to eat consistently. No more of that “I’ll just starve all day to ‘save up’ for a big dinner” nonsense.</p>
                </div>
             </div>
        </div> 


        <div className="card mb-5">
            <h3 className="card-title pt-4 pb-2 text-center">How Often Should You Switch up Your Workouts?</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img4} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 card-body">
                    
                    <p class="card-text">Variety may be the spice of life, but too much variety can ruin your fitness success. Whether it’s due to boredom or simply not knowing any better, switching up your workout routine too often may be what’s holding you back from reaching your goals.</p>
                    <p>Here’s what you need to know about how long you should stick with the same workout routine. As well as how often you should switch training variables, like exercises, sets, reps and weights. And how often you can add variety and keep things interesting without totally winging it.</p>
                    <h5>REPETITION EQUALS PROGRESS</h5>
                    <p>When our body adapts to exercise, it’s simply a survival mechanism. We voluntarily apply stress to our body by working out. Afterward, our body says, “Wow, that was tough. If we don’t add some muscle here and increase our strength there, we may not survive that a second time.” But if that stress never returns, our body then says, “Must have been a fluke. We’re going to stop building muscle and strength now!”

</p>
                </div>
             </div>
        </div>


    </div>
    )
}
