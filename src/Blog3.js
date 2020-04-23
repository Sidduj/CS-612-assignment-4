import React, { Component } from 'react';

class Blog3 extends Component {
  render() {
    const newLocal = <center><img src={process.env.PUBLIC_URL + '/gif.gif'} /></center>;
    return (
    
    <main>
    
    <h1><center>How to Fine-Tune your Machine Learning Models with Ease</center></h1>
    
    <p><b>April 23 / Khuyen Tran</b></p>
    <p>Have you ever wanted to experiment with different parameters for your model but find it really time-consuming to do so? Let’s say you want to use support 
        vector machines (SVM) to train and predict the model.</p>
    <center><img className="blog3" src={process.env.PUBLIC_URL + '/b3.png' } /></center>
    <p>You debate what could be the best value for C so you keep experimenting with different values of C manually and hopefully get good results. That is 
      time-consuming but still not so bad.</p>
    <p>But what if you want to first use <mark> sklearn.feature_extraction.text.TfidfVectorizer</mark> to extract important texts, then use 
    <mark> sklearn.feature_selection.SelectKBest </mark>to find the best features, and finally use <mark>sklearn.SVM.LinearSVCto</mark> train and predict the model? There would
       be so many parameters to tune in. Plus you need to find a way to record the results for comparison. So your notebook can look like a mess!</p>
   <p>Is there a better way to select the parameters, shorten the code, as well as save the results for comparison? Yes, of course! Our method will be a 
     delicious cake with three simple ingredients:</p>
    <ul> 
   <li>Pipeline to combine different models</li>
   <li>Grid search to find the best parameters for each model</li>
   <li>MLflow to record the results</li>
   </ul>
  <p> Have all the ingredients you need? Awesome! Now we are ready to put them together.</p>
  <a href="https://towardsdatascience.com/how-to-fine-tune-your-machine-learning-models-with-ease-8ca62d1217b1">For the complete article: use this link</a>
  </main>
    );
  }
}

export default Blog3;