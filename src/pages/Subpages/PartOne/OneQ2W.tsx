import { useNavigate } from "react-router-dom";

const OneQ2W: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
      
      <h2>You think you might have a metal fork with you somewhere, but... whatever. It's not worth the hassle. <br/><br/>

You use the plastic cutlery.<br/><br/>

It's not a big deal; most people use plastic utensils way more than you, so that makes it okay. Right?<br/><br/>

</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
    </div>
  );
}
  export default OneQ2W;