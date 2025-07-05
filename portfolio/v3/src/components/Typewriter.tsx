
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  loop?: boolean;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 150, loop = false, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const strings = React.useMemo(() => Array.isArray(text) ? text : [text], [text]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullTxt = strings[i];

      setDisplayText(current => {
        const newText = isDeleting
          ? fullTxt.substring(0, current.length - 1)
          : fullTxt.substring(0, current.length + 1);

        setTypingSpeed(isDeleting ? speed / 2 : speed);

        if (!isDeleting && newText === fullTxt) {
          if (!loop) return newText;
          setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && newText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
        return newText;
      });
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, strings, speed, delay, loop, typingSpeed]);

  return <span>{displayText}</span>;
};

export default Typewriter;
