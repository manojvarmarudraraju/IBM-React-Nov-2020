import React, { useState, useEffect } from 'react';

/* class Timer extends React.Component {
    state = {
        currentTime: new Date().toTimeString()
    }
    
    timerId = 0;
    
    componentDidMount() {
        this.timerId = setInterval(() =>{
            this.setState({ currentTime: new Date().toTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        console.log('timer is unmounted');
        if (this.timerId)
            clearInterval(this.timerId);
    }

    render(){
        return(
            <div>
                <span> Time : </span>
                <span>{this.state.currentTime}</span>
            </div>
        );
    }
} */

const Timer = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toTimeString());

    useEffect(() => {
        //this function is executed with the component is mounted
        console.log("timer is mounted");
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toTimeString());
        },1000);
        return () => {
            //this function is executed when the component is unmounted
            console.log('timer is unmounted');
            if (timerId)
                clearInterval(timerId);
        };
    }, []);

    return (
      <div>
        <span> Time : </span>
        <span>{currentTime}</span>
      </div>
    );
}

export default Timer;