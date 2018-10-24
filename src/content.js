import React from 'react';
import './index.css';

const SocialMedia = () => {

    return ( 
        <>
            <div className='container title_message'>
                <div id='links'>
                    <nav className="nav flex-column">
                        <a className="nav-link text-dark" href="https://drive.google.com/file/d/1NThAb6GRNtsRYEaQ5OKAJ3FERUM-MaQs/preview" target="_blank" rel="noopener noreferrer" ><i className="fas fa-2x orange fa-file"></i> Resume</a>
                        <a className="nav-link text-dark" href="https://www.linkedin.com/in/garyandersoniii/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-linkedin" ></i> Linkedin</a>
                        <a className="nav-link text-dark" href="https://github.com/thagary" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-github-square" ></i> Github</a>
                        <a className="nav-link text-dark" href="https://thagary.com/twitter" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-twitter-square" ></i> Twitter</a>
                        <a className="nav-link text-dark" href="https://thagary.com/discord" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-discord" ></i> Discord</a>
                        <a className="nav-link text-dark" href="https://thagary.com/steam" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-steam-square" ></i> Steam</a>
                        <a className="nav-link text-dark" href="https://thagary.com/instagram" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-instagram" ></i> Instagram</a>
                        <a className="nav-link text-dark" href="https://thagary.com/twitch" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x orange fa-twitch" ></i> Twitch</a>
                    </nav>
                </div>
                <div className='side'>
                <div id='project'>
                        </div>
                    <div id='info'>
                        <p>Junior Full-Stack Developer in Denver actively searching for a job. I currently am attending Galvanize where they are helping me master my skills in JavaScript, React, Node.js and many more. I am a fast learning, team player with attention to detail. I have a tons of experience in live stream broadcasting moderation for online gaming and esports.</p>

                        <p>I actively served in the United States Navy for 4 years as the calibration shop manager for Guam. I spoke at Twitchcon 2017 on "Channel moderation and chat moderation tools" with the lead moderators for ESL, Dreamhack, and a few Twitch Admins. This year I will be attending the Twitchcon Hackathon.</p>

                        <p>When I'm not coding I am watching streams, playing games, hiking, camping, snowboarding, or traveling to the nearest convention.</p>
                    </div>
                    <div id='project'>
                        </div>
                </div>
            </div>   
        </>
    )
}

export default SocialMedia