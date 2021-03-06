import '../assets/css/Bio.css';
import Logo from './Logo.js';
import ParalaxElement from './ParalaxElement.js';

class Bio extends ParalaxElement{
  render() {
    return (
      <div className="Bio">
          <div className="Bio-container">
            <Logo className="Bio-logo"/>
            <div className="Bio-about">
              <span>blem14</span>
              <span>Software Developer</span>
              <span></span>
            </div>
        </div>
      </div>
    );
  }
}

export default Bio;