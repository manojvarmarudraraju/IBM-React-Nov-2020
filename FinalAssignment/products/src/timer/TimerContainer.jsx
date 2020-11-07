import React, { Component, Suspense } from 'react';
//import Timer from './Timer';

class TimerContainer extends Component {
    state = {
        showTimer : false
    };

    render(){
        const Timer = React.lazy(() => import('./Timer'));
        return (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <h3>Timer</h3>
              <input
                type="checkbox"
                checked={this.state.showTimer}
                onChange={evt =>
                  this.setState({ showTimer: evt.target.checked })
                }
              />
              <span> Show Timer </span>
              {this.state.showTimer ? <Timer /> : null}
            </Suspense>
          </div>
        );
    }
}

export default TimerContainer;