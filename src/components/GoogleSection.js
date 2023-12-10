import React from 'react'
import '../App.css'
import './GoogleSection.css'

function GoogleSection() {
    return (
        <div className='google'>
            <div className='google-container'>
            <img src="/images/shop_rating.jpg" alt="rating"/>
            <h2>Google Customer Reviews</h2>
            
            <div className='review'>
                <p className='review-text'>
                Had my car serviced here twice so far! Happy both times.
                Clean, cute spot<br/>
                Staff members are very informative, helpful, and polite<br/>
                Estimate and approval process is streamlined by tech, with at-a-glance views and more details/photos accessible by clicking through<br/>
                Reasonable pricing & they’re not pushy ♡<br/>
                
                They get the work done pretty fast, and as far as I can tell, done right! Very grateful to have a mechanic in the neighborhood that I actually trust.
                <br />
                Thank you C.A.R. ! (Oh, I see what they did there… 😄)
                </p>
                <div className='review-rating'>
                ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='reviewer-name'>
                - Leila R
                </div>
            </div>
            
            {/* Review 2 */}
            <div className='review'>
                <p className='review-text'>
                Took my 2021 X3M BMW Competition for diagnostic for a major gas leak, installation of port injection, wheel balancing, and installation of exhaust. They don’t have a BMW sign on their shop, so I was hesitant at first, but man, what an amazing gem of a place I found. Beats everyone who claims he is a professional tuner. They fixed and diagnosed my gas leak, told me what to order exactly, installed a very complex air charge cooler and port E85 fuel injection, installed a complete exhaust without a leak, and balanced my wheels. When I told them my car shakes a little bit, for Chicago, their prices are actually amazing. I came from Missouri. They are busy all the time but when they tell you Wednesday will work on your car, then expect everything you can imagine possible or not to be completed that day. Superb people who really know what they are doing. If I could stay in Chicago a bit more I’ll ask them to rebuild my 2021 S58 engine with more forged parts, but unfortunately, I have to go back to Missouri. What a gem of a place I found.
                </p>
                <div className='review-rating'>
                ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='reviewer-name'>
                - Nawaf H
                </div>
            </div>
            <div className='review'>
                <p className='review-text'>
                Chicago Auto Repair is the absolute best. I've taken my car to this place a few times now and is always incredibly thorough and helpful when I need a repair. I have never felt taken advantage of, They lay it out to you straight. Highly recommend!
                </p>
                <div className='review-rating'>
                ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='reviewer-name'>
                - Audrey A
                </div>
            </div>
            <div className='review'>
                <p className='review-text'>
                My car broke down as I was 6h away from home - it was towed to Chicago auto repair. They waited for me to arrive after business hours! The next day, they were super fast to give me a diagnostic and estimate. They fixed the car really quickly and allowed me to go on my way that same day. Great service, would absolutely recommend.
                </p>
                <div className='review-rating'>
                ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='reviewer-name'>
                - Geoffroy L
                </div>
            </div>
            </div>
        </div>

    );
  }
  
  export default GoogleSection;
  