import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';


class Navigation extends Component {

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  
   async componentDidMount() {
          try {
            setInterval(async () => {

              console.log("reloading");
              //add API token from Blackboard in the next line after 'news&apiKey='
              const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=4bc8436bb2ce4e55a0ea54edd70626e9');
              const newsapi = await res.json();
              const articles = newsapi.articles;

              this.setState({
                isLoaded: true,
                items: articles
              })
            }, 5000);
          } catch(e) {
            console.log(e);
          }
    }

 render() {

    const { error, isLoaded, items } = this.state;
        if (error) {
          return <nav><div>Error: {error.message}</div></nav>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <nav>
             <div>
             <Link exact to="/"><center><h2>Homepage</h2></center></Link>
             </div>
             <div>
             <h2><center>Top Headlines</center></h2>
             </div>
            <ul className = "small">
              {items.map((item, key) => (

                <li key={key}>
                  <p className="spl">Title: {item.title}</p> <p  className="spl">Description: {item.description}</p> <p  className="spl"><a href={item.url}>Click to read full story...  </a></p>
                </li>
              ))}
            </ul>
            </nav>
          );
      }

    
    
  }
}

export default Navigation ;