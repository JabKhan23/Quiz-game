import { useNavigate } from "react-router-dom";

const OneQ2W: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <button className="home" onClick={() => navigate('/home')}>Home</button>
      
      <h2>You think you have a metal fork with you, but... whatever. It's not worth the hassle. <br/><br/>

You use the plastic cutlery.<br/><br/>

It's not a big deal; most people use single-use plastic tools way more than you. Right?<br/><br/>

</h2> 
<button onClick={() => navigate(-1)}>Try again</button>
    </div>
  );
}
  export default OneQ2W;