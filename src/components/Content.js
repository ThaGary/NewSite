import React from 'react';
import SocialMedia from './SocialMedia';

const Content = (props) => {
    return ( 
        <div className="container">
            <SocialMedia />
            <div>
                <h1 className="orange">Gary Anderson</h1>
                <div className="spacer"></div> 
          <img src="https://i.imgur.com/d72ET64.jpg" width="200em" align="right" alt="me" />
                <div className="aboutme">
                    <p>Junior Full-Stack Developer in Denver actively searching for a job. I currently am attending Galvanize where they are helping me master my skills in JavaScript, React, Node.js and many more. I am a fast learning, team player with attention to detail. I have a tons of experience in live stream broadcasting moderation for online gaming and esports.</p>

                    <p>I actively served in the United States Navy for 4 years as the calibration shop manager for Guam. I spoke at Twitchcon 2017 on "Channel moderation and chat moderation tools" with the lead moderators for ESL, Dreamhack, and a few Twitch Admins. This year I will be attending the Twitchcon Hackathon.</p>

                    <p>When I'm not coding I am watching streams, playing games, hiking, camping, snowboarding, or traveling to the nearest convention.</p>
                </div>
            </div>
        </div>
    )
}

export default Content