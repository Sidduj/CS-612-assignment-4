import React, { Component } from 'react';

class Blog2 extends Component {
  render() {
    return (
    
    <main>
    <h1><center>Get started with data science and win during COVID-19</center></h1>
    <center><img className="blog" src={process.env.PUBLIC_URL + '/b2.jpeg' } /></center>

    <p><b>April 23 / Raheel Ahmad</b></p>
    
    <p>
    The current situation couldn’t be more unfortunate, but, at the same time, it presents us with opportunities for innovation as new human needs are 
    popping up every day. From a boom in online shopping to a shift towards online collaborative work, we’re surviving this pandemic due to the virtual 
    world we built in the past decade.</p>
    <p>When businesses think about digital today, the first thing that comes to mind is the data. With vast amounts of data generated daily, we couldn’t be presented 
    with a better opportunity to utilize that data to inform our decision making. In these times of uncertainty, businesses need to make better decisions with 
    greater urgency and wider import at higher levels of risk. This demands — more than ever — the high quality of data analysis at high speed and volumes.
    So if you’re thinking about how you can start leveraging data science, congratulations, you’re already ahead of the clan. To help you with this data science 
    journey, here are guidelines of what research has shown businesses should do right now.
    </p>
    <h2>1. BUILD A CLEAR & CENTRALIZED DATA STRATEGY</h2>
    <p>The worst decision for an organization right now will be to reduce its transformation initiatives and revert to traditional working models. Organizations
    need a robust and centralized data science strategy with a pro-investment approach. With AI and advanced analytics, most of the value will be drawn from reduced 
    costs, increased productivity and reduced time to insight. Properly implemented, this can help companies increase their overall bottom line by 10–15%.</p>
    <p>So in short, businesses should establish data science and analytics as a COE (Center of Excellence). Executives need to sit down and define the guiding vision
    for transformation with clear milestones. More importantly, every employee in the company needs to be a part of this transformation.</p>
    <h2>2. IDENTIFY AND BUILD TARGETED BUSINESS USE CASES</h2>
    <p>Once the advanced analytics strategy has been defined, data scientists and the business users need to work together in 2-or-3 months agile sprints to go from 
    raw data to actionable insights. Identifying use cases that create value for the business is key to excel during the virus. Our research has shown that most of 
    the investment has been in digital marketing and internal productivity so utilizing such use cases can be very beneficial. The final step then is to mobile data
    applications in multiple aspects of the business. Already in this step, companies will start to see a shift in mindset towards productivity as data-driven 
    thinking saves time and ultimately money.</p>
    <a href="https://towardsdatascience.com/get-started-with-data-science-and-win-during-covid-19-97365da7bccb">For the complete article: use this link</a>
    </main>
    );
  }
}

export default Blog2;