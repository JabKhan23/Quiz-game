import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>
      This game consists of four stories that showcase how forks will be used over 800 years.<br/><br/>

Throughout the stories, you will sometimes need to choose between two options.<br/><br/>

If you choose the incorrect option, don't worry - you will be told what your choice led to, then have the option to go back to the question.<br/><br/>

Thank you! Please do not hesitate to get in touch if you have any questions or issues: <b>mihnea.dinu100@gmail.com</b><br/><br/>


        </h2>
      <button onClick={() => navigate('/home')}>Back to Main Menu</button>
   
    </div>
  );
};

export default Info;