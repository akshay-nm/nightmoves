import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring';

const SocialMediaLink = ({ icon, profileLink }) => {
  const [props, set, stop] = useSpring(() => ({ padding: '2rem', opacity: 0, fontSize: 30 }))
  const [hover, setHover] = useState(false)

  useEffect(() => {
    set({ opacity: 1 })
  }, [])


  useEffect(() => {
    set({ fontSize: hover? 40: 30 }) 
  }, [hover])

  return (
    <animated.a 
      href={profileLink}
      rel='noopener noreferrer'
      target='_blank'
      style={props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} >
      <FontAwesomeIcon icon={icon} />
    </animated.a>
  );
};

export default SocialMediaLink;