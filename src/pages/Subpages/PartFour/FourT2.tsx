import { useNavigate } from "react-router-dom";

const FourT2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/home')}>Home</button>
   
        <h2>You stick the fork onto your face with some epoxy, prongs facing downwards. It actually does wonders for your facial harmony; you are feeling good.<br/><br/>

Later, you are at the party. Nobody's really saying anything, but you can tell they're looking at you. You start to feel like maybe you made a mistake, maybe you look dumb and out of place.<br/><br/>

Someone taps you on the shoulder: "Hey there, buzz."<br/><br/>

You turn around and see none other than VA-Z1P, commonly known as Zip: it is not only a BNOS (Big Name On Spaceship), but also the richest and most impressive looking robot on the Daedalus.<br/><br/>

"I noticed your style - I'm digging the DIY stuff, very 26th century retro chic. But I especially like that," it explains as he points to your fork nose.<br/><br/>

A crowd forms around the two of you; everyone starts talking, making comments about your nose. 
<br/><br/>


</h2>
    <button onClick={() => navigate('/pt4t3')}>Next</button>  
      </div>
    );
}
  export default FourT2;