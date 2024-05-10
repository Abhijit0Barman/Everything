import { useState, useEffect } from 'react';

const useThrottle = (value, delay) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const [lastExecutedTime, setLastExecutedTime] = useState(0);

    useEffect(() => {
        const now = Date.now();
        if (now - lastExecutedTime > delay) {
            setThrottledValue(value);
            setLastExecutedTime(now);
        }
    }, [value, delay, lastExecutedTime]);

    return throttledValue;
};

export default useThrottle;
