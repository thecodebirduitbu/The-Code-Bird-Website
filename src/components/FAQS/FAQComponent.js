import React, { useEffect, useState } from 'react';
import "./faqs.css"
const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (event) => {
    const question = event.currentTarget;
    const answer = question.querySelector('.faq-answer');
    question.classList.toggle('active');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  };

  useEffect(() => {
    const questions = document.getElementsByClassName('faq-question');
    for (let i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', toggleAnswer);
    }
    return () => {
      for (let i = 0; i < questions.length; i++) {
        questions[i].removeEventListener('click', toggleAnswer);
      }
    };
  }, []);

  return (
    <div className='body2'>
      <h1>Frequently Asked Questions</h1>

      <div className="faq-container">
        <div className="faq-question">
          <h3>What is the purpose of this coding website?</h3>
          <div className="faq-answer">
            <p>
              Our coding website is designed to guide and support first-year and freshers who are new to coding, as well as second-year students. We provide guidance and resources in various fields such as cyber security, machine learning, full stack web development, front-end web development, back-end web development, game development, data structures and algorithms, competitive programming, blockchain, and Android web development.
            </p>
          </div>
        </div>

        <div className="faq-question">
          <h3>Who can participate in the events organized by our website?</h3>
          <div className="faq-answer">
            <p>
              The events organized by our website are open to all students, including those from other branches of engineering. We encourage students with an interest in coding and related fields to attend our events and benefit from the guidance and knowledge shared.
            </p>
          </div>
        </div>

        <div className="faq-question">
          <h3>How can I determine which coding field is best suited for me?</h3>
          <div className="faq-answer">
            <p>
              Choosing the right coding field can be challenging. We offer guidance and assistance to help you identify your passion and interests. Through our resources, articles, and personalized advice, we aim to guide you in selecting the field that aligns with your skills and aspirations.
            </p>
          </div>
        </div>

        <div className="faq-question">
          <h3>Is there any fee for signing up on our website?</h3>
          <div className="faq-answer">
            <p>
              Yes, we require a sign-up fee of 200 INR to support the management and maintenance of our website. It helps cover the costs associated with organizing events, maintaining the platform, and providing quality guidance to our users. Rest assured, none of the team members take the money home personally.
            </p>
          </div>
        </div>

        <div className="faq-question">
          <h3>How can I get assistance or guidance from this coding website of CodeBird?</h3>
          <div className="faq-answer">
            <p>
              Once you sign up on our website, you gain access to a wealth of resources and guidance materials. You can explore our articles, tutorials, and discussions related to various coding fields. Additionally, you can reach out to our student team through the provided contact channels to ask specific questions and seek personalized guidance.
            </p>
          </div>
        </div>

        <div className="faq-question">
          <h3>Are the resources and guidance provided suitable for beginners?</h3>
          <div className="faq-answer">
            <p>
              Absolutely! Our website is specifically designed to cater to beginners, including first-year students and freshers. We understand the challenges faced by newcomers in the coding world and have tailored our resources and guidance accordingly. You'll find beginner-friendly content, step-by-step tutorials, and a supportive community to help you on your coding journey.
            </p>
          </div>
        </div>

        <div className="faq-question">
          <h3>Who is our faculty advisor?</h3>
          <div className="faq-answer">
            <p>
              Mr Sumit Gupta Sir (professor in our college UIT BU) is our faculty advisor. For more info, please go to the About Us page.
            </p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default FAQComponent;
