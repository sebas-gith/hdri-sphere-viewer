import './Compass.css';

const Compass = ({ rotation = 0 } : { rotation?: number }) => {
  return (
    <div className="compass-container">
      <div className="compass-glass">
        <div className="cardinal-points">
          <span className="point n">N</span>
          <span className="point e">E</span>
          <span className="point s">S</span>
          <span className="point w">W</span>
        </div>

        <div 
          className="needle-wrapper" 
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="needle-north" />
          <div className="needle-south" />
        </div>
        
        <div className="center-glow" />
      </div>
    </div>
  );
};

export default Compass;