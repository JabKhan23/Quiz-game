import { useNavigate } from 'react-router-dom';



const Retry: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>That's Incorrect</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
}
  export default Retry;