import { useState, useEffect, useRef } from 'react';

const useInView = (options = { threshold: 0.3 }) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Uma vez que o elemento foi visto, podemos parar de observar
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return [elementRef, isInView];
};

export default useInView;
