import { useNavigate } from "react-router-dom";

const FourQ1W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
  
        <h2>You decide to go back for the day; your home is a 1.5 meter long by 1.5 meter wide by 1.8 meter tall cubicle.<br/><br/>

As you sit and recharge your batteries, you start to accept the idea that some things never change. However, forever seems like an awful long time to be doing the same thing over and over again.
<br/><br/>


</h2>
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default FourQ1W;