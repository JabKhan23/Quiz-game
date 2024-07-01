import { useNavigate } from "react-router-dom";

const FourStart: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Part 4: The Trend</h1>
       
      <button className="home" onClick={() => navigate('/home')}>Home</button>
   
        <h2><br/>The year is 2824. The place is the Daedalus-4, a gigantic spaceship travelling among the stars.<br/><br/>

You are a robot: model XC-J4B, but everyone calls you Jab. You are a class XC droid, designed to roam the lower decks, reclaim and repurpose metallic resources for sustainable reintegration - a fancier way of saying you pick up junk all day.<br/><br/>

It has been over 400 years since the planet known as Earth imploded and crumbled away, over 200 years since the last of your predecessors, organic bipeds known as humans, perished.<br/><br/>

Robot society is not that different from the human one, with one big exception: when the robots were made, they had basic cubic bodies, but no limbs or features: no heads, faces, arms, legs, anything. The only way to upgrade is to buy designer features or to build your own. Most, including you, strive to do this, as the more human your appearance, the higher you stand on the social ladder.<br/><br/>

Unbeknownst to you, in a different corner of the galaxy, there floats a bit of stardust that was once an activist named Greta Thunberg. If she were alive to see what had happened to her beloved planet and society, she wouldn't be happy.
<br/><br/>

</h2>
    <button onClick={() => navigate('/pt4q1')}>Next</button>  
      </div>
    );
}
  export default FourStart;