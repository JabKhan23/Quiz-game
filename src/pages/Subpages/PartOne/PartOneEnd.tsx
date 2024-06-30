import { useNavigate } from "react-router-dom";

const PartOneEnd: React.FC = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>Part 1: The Inspiration</h1>
        <h2>You put the plastic cutlery aside, then start digging into your bag. You pull out a metal fork.
Alice asks: "You seriously brought a fork with you?"
"Of course," you reply. "Didn't you?"
"No..."
"Well, good thing I've got an extra one!"
You hand Alice another metal fork. She finds it a bit funny but genuinely appreciates your
dedication to the cause.
"I've got metal straws too. Let me know if you need one," you add.

More time passes. You are both finished with your meals.
Alice is in deep thought. "You know, I've been thinking... When it comes to what I want to do in
life, I only ever considered money."
She spins the metal fork in her hand, inspecting the tiny scratches it got from years of use.
"But I want to help the world in some way too. I'm not sure how yet, but I think that'd be the
right thing to do. It would make me happier."
You smile.
"I think so too," you respond. You look at your own fork. "I'm sure you will figure it out!"

You look out the window; across the street is one of the biggest hotels in Stockholm. There
seems to be some sort of event going on.
"Apparently there's some sort of convention going on there," Alice clarifies. "A massive one;
CEOs from a bunch of big companies are attending."
A black limo stops in front of the hotel. A man steps out: he is in his sixties, wearing an
expensive pin-stripe navy suit. His wrists and fingers are adorned with gold jewellery. You
recognise him as the CEO of an international oil enterprise; his business choices have been less
than ethical.
Alice speaks again: "By the way, have you figured out what you want to do? Career-wise, I
mean."
You're still looking at the CEO. You lift your fork in front of your eye, placing it in front of the
man. It makes it look like he is behind prison bars.
You smile. "I think I've got an idea," you reply to Alice.

</h2>
        <button onClick={() => navigate('/question2p2')}>Go to Part 2</button>
       
      </div>
    );
}
  export default PartOneEnd;