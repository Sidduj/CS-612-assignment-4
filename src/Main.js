import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Walking Through a Linear Regression</Link>
     <p>April 23 / Andrew Cole</p>
     <img src={process.env.PUBLIC_URL + '/b1.jfif' }/>
     <p> A full breakdown of the machine learning process. A linear regression serves as the cornerstone algorithm when working with data.
         It is widely used and one of the most applicable supervised machine learning algorithms in existence. By performing linear regression, 
         we are trying to capture the best linear relationship between predicting independent variables (X1, X2, etc…) and a predicted dependent variable (Y). 
         Together, let’s walk through a linear regression model process in Python. The repository, with all code and data, can be found here.We will be using 
         a simulated dataset representing carseat sales for a company. The company wants for their data team to put together a model which will accurately 
         capture and predict their carseat sales movements for their store locations, given a dataset with a number of predicting</p>
     </li>
     <li>
     <Link className="title" exact to="/Blog2">Get started with data science and win during COVID-19</Link>
     <p>April 23 / Raheel Ahmad</p>
     <img src={process.env.PUBLIC_URL + '/b2.jpeg' } />
     <p>The current situation couldn’t be more unfortunate, but, at the same time, it presents us with opportunities for innovation as new human needs are popping 
      every day. From a boom in online shopping to a shift towards online collaborative work, we’re surviving this pandemic due to the virtual world we built in 
      the past decade. When businesses think about digital today, the first thing that comes to mind is the data. With vast amounts of data generated daily, 
      we couldn’t be presented with a better opportunity to utilize that data to inform our decision making. In these times of uncertainty, businesses need to 
      make better decisions with greater urgency and wider import at higher levels of risk. This demands — more than ever — the high quality of data analysis at 
      high speed and volumes. So if you’re thinking about how you can start leveraging data science, congratulations, you’re already ahead of the clan. To help 
      you with this data science journey, here are guidelines of what research has shown businesses should do right now.
     </p>
     </li>
     <li>
     <Link className="title" exact to="/Blog3">How to Fine-Tune your Machine Learning Models with Ease</Link>
     <p>April 23 / Khuyen Tran </p>
     <img src={process.env.PUBLIC_URL + '/b3.png' }/>
     <p>Have you ever wanted to experiment with different parameters for your model but find it really time-consuming to do so? Let’s say you want to use support 
        vector machines (SVM) to train and predict the model.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;