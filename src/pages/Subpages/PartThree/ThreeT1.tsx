import { useNavigate } from "react-router-dom";

const ThreeT1: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
  
        <h2>You use the fork to comb your granddaughter's hair. It takes a while, but you've got time to spare - there isn't much to do in the post-apocalyptic world.<br/><br/>

Lucy's hair looks much better and she seems happy. Now it's time to make her some clothes.
<br/><br/>


</h2> 
    <button onClick={() => navigate('/pt3q2')}>Next</button>  
      </div>
    );
}
  export default ThreeT1;