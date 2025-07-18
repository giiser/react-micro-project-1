import {useState} from "react";
import Star from "./Star.jsx";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

const Rating = ({heading = 'Rate your experience', feedbackMessages =['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'], color='gold'} ) => {
    const stars = Array.from({length: 5}, (_, i) => i+1);
    // states def
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating > 0){
            setSubmitted(true);
        }
    }


    // closing the model and resetting the UI
    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    }


    return (
        <div className={'rating-container'}>
            <h2>{ heading } </h2>
            <div className="stars">
                {stars.map((star) => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        ratingClick={setRating}
                        mouseEnter={setHover}
                        mouseLeave={setHover}
                    />
                ))}
            </div>
            {rating>0 && <p className={'feedback'}>{feedbackMessages[rating - 1]}</p>}

            {/*<button type={'submit'} className={'submit-btn'} onClick={handleSubmit} disabled={rating===0}>Submit</button>*/}
            {/*Button component*/}
            <Button
                className={'submit-btn'}
                disabled={rating === 0}
                onClick={handleSubmit}
            >
                Submit
            </Button>
            {/*modal*/}
            <Modal isOpen={submitted} onClose={closeModal} rating={rating} />

        </div>
    );
};

export default Rating;