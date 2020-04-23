import React, { Component } from 'react';

class Blog1 extends Component {
  render() {
    return (
    
    <main>
    <h1><center>Walking Through a Linear Regression</center></h1>
    <center><img className="blog" src={process.env.PUBLIC_URL + '/b1.jfif' }/></center>
    
    <p><b>April 23 / Andrew Cole</b></p>
    
    <p>A linear regression serves as the cornerstone algorithm when working with data. It is widely used and one of the most applicable supervised machine 
      learning algorithms in existence. By performing linear regression, we are trying to capture the best linear relationship between predicting independent 
      variables (X1, X2, etc…) and a predicted dependent variable (Y). Together, let’s walk through a linear regression model process in Python. The repository,
       with all code and data, can be found <a href ="https://github.com/andrewcole33/carseat_sales_linreg">here</a>.</p>
    <h2>The Set-Up</h2>
    <p>We will be using a simulated dataset representing carseat sales for a company. The company wants for their data team to put together a model which will 
      accurately capture and predict their carseat sales movements for their store locations, given a dataset with a number of predicting independent variables. 
      e variable descriptions are as follows:</p> 
      <ul>
        <li><b>Sales: unit sales at each location</b></li>
        <li>CompPrice: price charged by the nearest competitor at each location</li>
        <li>Income: community income level</li>
        <li>Advertising: local advertising budget for the company at each location</li>
        <li>Population: population size in the region (in thousands)</li>
        <li>Price: price charged for a car seat at each site</li>
        <li>ShelveLoc: quality of shelving location at site (Good | Bad | Medium)</li>
        <li>Age: average age of the local population</li>
        <li>Education: education level at each location</li>
        <li> Urban: whether the store is in an urban or rural location</li> 
        <li>USA: whether the store is in the US or not</li>
        </ul>
        <p>Sales will be our dependent variable (or target) and the remaining 10 variables (features) will be processed and manipulated to assist in our 
          regression. It is important to note at this point what our variables consist of. We have certain variables, such as income, advertising, or population 
           are all integer based variables. However, we also have variables like Urban, USA, and ShelveLoc. The values for these variables are representing categorical
           lues (Yes/No; Good/Bad/Medium; etc.). We will see how to account for these differences as we progress, it is just important to note at this stage that they
            are different. (Utilizing the ‘df.info()’ command in Python will assist in identifying the makeup of your variable values.</p>
      <a href="https://towardsdatascience.com/walking-through-a-linear-regression-dca9942111e4">For the complete article: use this link</a>
    </main>
    );
  }
}

export default Blog1;