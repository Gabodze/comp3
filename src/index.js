import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    return(
      <>
      <h4> 1. ჯავასკრიპტის მთავარ ფაილს უნდა ერქვას – index.js. იმისთვის, რომ ეკრანზე გამოვიდეს საბოლოო შედეგი, index.js ფაილი რენდერდება index.html–ში. </h4>
      <h4> 2. რეაქტში შეგვიძლია ორი ტიპის კომპონენტის შექმნა – ფუნქციური ტიპის და კლასის ტიპის კომპონენტების.</h4>
      <h4> 3. შევქმნით კლასის ტიპის კომპონენტს class MyComponent extends React.Component, შემდეგ ცვლადს – myVar = 'ცვლადი'; შემდეგ გამოვიძახებთ render() თვისებას, გავუწერთ return-ს, შიგნით შევქმნით დივს და მასში შევიტანთ ცვლადს</h4>
      <h4> 4. class myCar აკლია extends React.Component, რომელიც ჩვენს შექმნილ კომპონენტს რეაქტის კოპონენტთან აკავშირებს.
        ასევე render()ფუნქცია, რომელიც არენდერებს და ეკრანზე გამოაქვს შიგნით შეტანილი კოდი  </h4>
      
      
      {/* მეოთხე კითხვის კოდი */}
        <pre>
          <code>
            {`class myCar extends React.Component {
                render() {
                  return (
                    <h2>Hi, I am a Car!</h2>
                  );
                }
              }`}
          </code>
        </pre>

        <h4>5. აქაც აკლია  extends React.Component და ელემენტები არ არის ერთ საერთო დივში მოქცეული</h4>
        {/* მეხუთე კითხვის კოდი */}
        <pre>
          <code>
            {`class Car extends React.Component {
                render() {
                  return (
                    <h1>text</h1>
                    <h2>text</h2>

                  );
                }
              }`}
          </code>
        </pre>


      </>
    )
  } 
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)


