import { useNavigate } from "react-router-dom";

const TwoQ2W: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>  
      <button className="home" onClick={() => navigate('/home')}>Home</button>
    
        <h2>You pull out the book about baking; it's not the correct one, but it caught your eye. You start flicking through it.<br/><br/>

"Wow, this is great stuff," you say to yourself.<br/><br/>

Albert tries to get your attention: "We need to get going, Master Wade."<br/><br/>

"Look at this one, Albert, look: it's Shrek; they have a recipe for a Shrek-shaped cake. It's got his iconic ears and everything."<br/><br/>

"Master-"<br/><br/>

"Albert, come on: they put the signal up for everything nowadays. They probably just caught someone jaywalking or something, they can figure it out by themselves. Let's go make Shrek."<br/><br/>

"Okay," says Albert, defeated. <i>I really should've never taken this job</i>, he thinks.
<br/><br/>


</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
      </div>
    );
}
  export default TwoQ2W;