import React, { Component } from 'react';

 
 class About extends Component {
    render(){
       return (
          <div>
             <h2 className="about">About</h2>
             <img className="image" src="https://media.giphy.com/media/3o85xjSETVG3OpPyx2/giphy.gif"></img>
             <p className="paragraph">Brew Buddy was created to make it easier to find a new brewery to explore whether your looking for new brews to try out or just looking to hangout with friends and checking out some local breweries. You can also make a brewery wishlist to visit that will stay stored for as long as you need. That way you can refer back to your list the next time your puzzled on where to explore and grab some brews with friends.</p>
          </div>
       );


    }
}
 
export default About;