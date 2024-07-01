import { useNavigate } from "react-router-dom";

const OneT3: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
           
        <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
        
        <h2>More time passes. You are both finished with your meals.<br/><br/>

Alice is in deep thought. "You know, I've been thinking... When it comes to what I want to do in life, I only really thought about money."<br/><br/>

She spins the metal fork in her hand, inspecting the tiny scratches it accumulated from years of use.<br/><br/>

"But I want to do something that helps the world in some way too. I'm not sure what yet, but it sounds like the right thing to do. I think it would make me happier."<br/><br/>

You smile.<br/><br/>

"I think so too," you respond. You glance at your own fork, then look back at Alice. "I'm sure you will figure it out!"

<br/><br/>

</h2>
    <button onClick={() => navigate('/pt1t4')}>Next</button>  
      </div>
    );
}
  export default OneT3;