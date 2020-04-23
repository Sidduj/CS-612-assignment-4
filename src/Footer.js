import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
     <footer>
      Made by Siddharth Jhaveri 
          <a href="https://www.linkedin.com/in/siddharth-jhaveri/"><img src={process.env.PUBLIC_URL + '/l.png' } width = '25px'  alt="linkedin" /></a>
          <a href="https://www.kaggle.com/siddujhaveri"><img src={process.env.PUBLIC_URL + '/g.png' } width = '25px' alt="Github" /></a> 
          <a href="https://github.com/Sidduj"><img src={process.env.PUBLIC_URL + '/k.png' } width = '50px' alt="Kaggle" /></a>
     </footer>
    );
  }
}

export default Footer;