import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {
    const faq = useLoaderData()
    return (
        <>
            <div className="blogs-container">
        <div className="wrapper-container">
            <h2>FAQ</h2>
          {faq.map((faq) => {
            return (
              <React.Fragment key={faq.id}>
                <div className="question-container">
                  <h1>{faq.question}</h1>
                </div>
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
        </>
    );
};

export default FAQ;