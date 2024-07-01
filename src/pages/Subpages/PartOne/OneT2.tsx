import { useNavigate } from "react-router-dom";

const OneT2: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <button className="home" onClick={() => navigate('/home')}>Home</button>
      
        <h2>You leave the plastic cutlery and start digging into your bag. You pull out a metal fork.<br/><br/>

"You seriously brought a fork with you?" asks Alice.<br/><br/>

"Of course," you reply. "Didn't you?"<br/><br/>

"No..."<br/><br/>

"Well, good thing I've got an extra one!"<br/><br/>

You hand Alice another metal fork. She finds it a bit funny but genuinely appreciates your dedication.<br/><br/>

"I've got metal straws too. Let me know if you need one," you add.<br/><br/>

</h2> 
    <button onClick={() => navigate('/pt1t3')}>Next</button>  
      </div>
    );
}
  export default OneT2;