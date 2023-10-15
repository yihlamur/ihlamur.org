import React, { useState } from 'react';

const Section: React.FC<{ title: string }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section" style={{ marginBottom: '30px' }}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <div style={{ transform: `rotate(${isOpen ? '90deg' : '0deg'})`, transition: 'transform 0.3s', fontSize: '0.1em' }}>
          ▶
        </div>
        <span style={{ marginLeft: '8px', fontSize: '1.1em', fontWeight: 'bold' }}>{title}</span>  
      </div>
      {isOpen && <div className="content ml-8" style={{ marginTop: '10px', maxWidth: '50%', textAlign: 'justify'}}>{children}</div>}  
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div style={{ margin: '2% 3%' }}>
      <Section title="About me">
        <p>I am an entrepreneur, engineer, and investor. I am married with two kids, live in the Bay Area, and work at <a href="https://vela.partners" target="_blank" rel="noopener noreferrer">Vela Partners</a>.</p>
        <p>I was born and raised in Turkey by a mathematician mother and a father who started and ran a successful technology company. I observed their harmanious love relationship and witnessed the positive impact of math, technology and entrepreneurship in my life. My parents' presence, values and parenting style define who I am.</p>
        <p>My father took risks when no one was talking about startups or knew what computers were. Every night I would wait for my father to carry his computer on his shoulder and walk up 5 floors to our apartment. He would code and take his computer back to his office before I woke up. He leads by example, is open minded and has a positive outlook on life. I grew up with him as my role model.</p>
        <p>My mother is a super woman. When I was growing up, she carried the whole household. She was the main breadwinner while my father was building his business. She was the angel investor in my father's business, taking her savings from under her pillow and asking her father to invest in the company as well. She has supported the whole family tirelessly for decades. She has high conviction, which most people lack. I feel fortunate to observe that love, and to have found my wife, another super woman who has been supporting me with high conviction since day 1.</p>
        <p>I was exposed to computers at a young age. As any 4 year old would do, I started playing DOS-based games and shell commands. That turned into IRC-based socializing, then hacking, designing and coding. My father started involving me in his business during my teenage years. I was exposed to strategic business decisions and high-stake activities such as scaling a reseller network, meeting enterprise customers and hiring/firing executives. In retrospect, that encoded my DNA and strong business intuition in me.</p>
        <p>In principle, I value being a good human being and working unbelievably hard. The rest follows.</p>
        <p>I will continue doing what I am doing until the last day of my life. Build new products, solve real problems and work hard with excellent people whom I can learn from.</p>
        {/* The rest of your text */}
      </Section>
      <Section title="Why I do what I do">
        <p>Innovation makes our lives better.</p>
        <p>Innovation creates new products, services, and experiences that were previously unimaginable. We have technological superpowers that we have not had before. Luxury products that were available to the kings and queens are now available to all of us.</p>
        <p>100 years ago, the world was full of wars. People struggled to find bread. Most babies were dying when they were born. Now, most wars have moved to the cyber world; less people are dying. People can now pick which type of bread they buy. And, less babies are dying during childbirth. However, we still have a long way to go...</p>
        <p>I wake up every day so that I can contribute to accelerate this change.</p>
      </Section>
      <Section title="Contact">
        <p>Follow me at <a href="https://www.linkedin.com/in/yihlamur/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
        <p>Drop me an email at yigit at our company domain</p>
      </Section>
    </div>
  );
};

export default Home;
