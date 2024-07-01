import { useNavigate } from "react-router-dom";

const FourT3: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>    
      <button className="home" onClick={() => navigate('/mainmenupage')}>Back to Main Menu</button>
  
        <h2>Time passes. You and Zip start a business, manufacturing and selling forks to everyone in high society. The Edisons start rolling in, but you know how the world works: trends come and go. Nowadays, pizza cutter noses are what's gaining popularity - the spin feature made them extra enticing.<br/><br/>

However, using your newfound wealth and influence, you decide to make some changes: no robot should have to scramble for an arm or a leg. You introduce some radical ideas and, although there is pushback from the elders, you succeed over the next few hundred years.<br/><br/>

Now, while the rich still have the fanciest features, everyone has access to free, good quality parts and can function just the same. Existence on the Daedalus-4 is a little bit fairer.<br/><br/>

You keep wearing your fork nose as a reminder of who you are and where you started.
<br/><br/>


</h2> 
    <button onClick={() => navigate('/endpage')}>Next</button>  
      </div>
    );
}
  export default FourT3;