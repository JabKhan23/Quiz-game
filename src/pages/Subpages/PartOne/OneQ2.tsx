import { useNavigate } from "react-router-dom";

const OneQ2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <button className="home" onClick={() => navigate('/home')}>Home</button>
       
      <h2>Time passes. Your food arrives.<br/><br/>

The waitress sets down plastic cutlery, wrapped in transparent, plastic packaging.<br/><br/>
</h2> 
      <button onClick={() => navigate('/pt1q2w')}>Use the cutlery
      </button>
      <button onClick={() => navigate('/pt1t2')}>Don't use the cutlery
      </button>
    </div>
  );
}
  export default OneQ2;