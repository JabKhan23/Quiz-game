import { useNavigate } from "react-router-dom";

const TwoQ1W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>   
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
      
        <h2>Ah, it's a bat. It's for that new guy, the bat person... What was his name again? Something dumb, probably.<br/><br/>

You relax - false alarm.<br/><br/>

"Master Wade?" says Albert, confused.<br/><br/>

"It's a bat, Albert. It's for that other guy - let him sort it."<br/><br/>

"Master, it's not a ba-"<br/><br/>

"It is a bat," you interrupt. "You must be wearing your reading glasses. Oh, and can you go make me a margarita?"<br/><br/>

Albert gives up and goes back inside. <i>I should've never taken this job</i>, he thinks.

<br/><br/>


</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default TwoQ1W;