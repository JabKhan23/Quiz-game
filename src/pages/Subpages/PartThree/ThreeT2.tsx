import { useNavigate } from "react-router-dom";

const ThreeT2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>

        <h2>You lock a corner of the fabric under the sewing machine's foot, then use the fork to create the pleats: you slot the fabric between the two outer-most prongs, then twist, then sew over that section. Then you do it again, and again, and again, until the entire skirt is pleated.<br/><br/>

Lucy is in love with her new skirt; great job!<br/><br/>

However, you feel like something's still missing.
<br/><br/>


</h2>  
    <button onClick={() => navigate('/pt3q3')}>Next</button>  
      </div>
    );
}
  export default ThreeT2;