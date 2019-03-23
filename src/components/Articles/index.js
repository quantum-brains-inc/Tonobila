import React from 'react'
import './article.css'
import image from '../../images/teslaM.jpg'
import Actuality from '../actuality'
const Articles = ()=> {
    return ( 
        <div className="background-container">
            <div className="article-container">
                <div  className='div1'>
                <h1> Teslas Are Getting a “Party <br/> and Camping Mode”</h1>
                <div className="yellow-line">

                </div>

                <p> A potential rival to Tesla in electric cars just got a big boost from Amazon.
                    The online retail giant is leading a $700 million investment in Rivian, a Michigan
                    company that is developing a battery-powered pickup truck and an electric sport utility
                    vehicle. The automaker announced the new round of investment on Friday, offering few details
                    but saying it would remain independent.
                </p>
                <p>
                    Founded in 2009 by an M.I.T.-trained engineer, R. J. Scaringe, Rivian first showed its truck 
                    and S.U.V. at the Los Angeles Auto Show in November. The key feature of each is a chassis that
                    is shaped like a skateboard and includes all the components that propel the vehicles — a large 
                    battery pack, axles, suspension, cooling system and four electric motors. The company says its 
                    pickup will be able to go up to 400 miles on a full charge.
                </p>
                <p>
                    The deal is the latest example of how the auto industry is being reshaped by new technologies and 
                    nimble companies that have raced ahead of many traditional carmakers. While General Motors, Ford 
                    Motor and others are scrambling to introduce new electric vehicles, Tesla has become by far the 
                    leading seller of electric cars in the United States. Waymo, a division of Google’s parent company, 
                    Alphabet, is considered by some analysts to be the leading developer of autonomous vehicles.
                </p>
                <p>
                    “We’re inspired by Rivian’s vision for the future of electric transportation,” Jeff Wilke,  
                    Amazon’s chief executive for worldwide consumer, said in a statement. “R. J. has built an impressive
                    organization, with a product portfolio and technology to match. We’re thrilled to invest in such 
                    an innovative company.”
                </p>
                <img src={image} className="imagecar"/>
                <p>Founded in 2009 by an M.I.T.-trained engineer, R. J. Scaringe, Rivian first showed its truck and S.U.V.
                 at the Los Angeles Auto Show in November. The key feature of each is a chassis that is shaped like a skateboard 
                 and includes all the components that propel the vehicles — a large battery pack, axles The key feature of each is a chassis that is shaped like a skateboard 
                 and includes all the components that propel the vehicles — a large battery pack, axles, suspension, cooling system 
                 and four electric motors. The company says its pickup will be able to go up to 400 miles on a full charge.</p>
                
                </div>
                <div  className='div2'>
                    <p>Ads</p>
                </div>
            </div>
            <Actuality/>
        </div>

    )
  }
export default Articles;