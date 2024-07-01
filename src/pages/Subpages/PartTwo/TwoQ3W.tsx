import { useNavigate } from "react-router-dom";

const TwoQ3W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>   
      <button className="home" onClick={() => navigate('/home')}>Home</button>
     
        <h2>Wow. A spoon. Seriously. Your dear old dad was killed by a spoon. Whatever you say.<br/><br/>

You are the hero known as The Silver Spoon.<br/><br/>

You reach the bottom of your stairs, where your hero costume is displayed behind thick, bullet-proof glass. You observe it: a silver armour with a round dish going around the helmet. It kind of looks like a triceratops, but unlike a triceratops it is not intimidating in the slightest.<br/><br/>

You suit up and go serve some cold justice. However, because of the size and weight of your helmet, you develop chronic neck pain. You are forced to give up vigilantism a year later. You pick up baking as a way of coping.
<br/><br/>


</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default TwoQ3W;