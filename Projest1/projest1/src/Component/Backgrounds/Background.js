import './Background.css';
import carvideo2 from '../../assets/carvideo2.mp4';  // Assuming it's a video, not an image
import car8 from '../../assets/car8.png';
import car6 from '../../assets/ccar6.png';
import car9 from '../../assets/car9.png';

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background fide-in' autoPlay loop muted>
                <source src={carvideo2} type='video/mp4' />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={car8} className="background fide-in" alt="car1" />;
    } else if (heroCount === 1) {
        return <img src={car6} className="background fide-in" alt="car2" />;
    } else if (heroCount === 2) {
        return <img src={car9} className="background fide-in" alt="car4" />;
    }  else {
        return null;  // If none of the conditions match, return nothing
    }
};

export default Background;