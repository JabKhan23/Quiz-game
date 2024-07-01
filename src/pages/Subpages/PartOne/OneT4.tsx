import { useNavigate } from "react-router-dom";

const OneT4: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
      
        <h2>You look out the window; across the street is a renowned 5-star hotel. There seems to be some sort of event going on.<br/><br/>

"Apparently there's some sort of business convention going on there," Alice clarifies. "I mean a big one; CEOs from a bunch of big companies are attending."<br/><br/>

A black limo stops in front of the hotel. A man steps out: he is in his sixties, wearing an expensive pin-stripe navy suit. His wrists and fingers are adorned with gold jewellery. You recognise him as the CEO of an international oil enterprise: his business decisions have been less than ethical, and that's putting it very mildly.<br/><br/>

"By the way, have you figured out what you want to do? Career-wise, I mean." adds Alice.<br/><br/>

You're still looking at the CEO. You lift your fork in front of your eye, placing it over the man. It makes it look like he is behind prison bars.<br/><br/>

You smile. "I think I've got an idea."

<br/><br/>

</h2> 
    <button onClick={() => navigate('/pt2start')}>Continue to Part 2</button>  
      </div>
    );
}
  export default OneT4;