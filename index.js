const { useRef, useEffect } = require('react');

const useClickOutside = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
            return;
        }
        callback(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
        document.removeEventListener('mousedown', listener);
        };
    }, [callback]);

    return ref;
};

module.exports = useClickOutside;
