import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
`;

export const Line = styled(motion.div)`
  position: absolute;
  background-color: rgba(14, 13, 13, 0.2);
`;

export const Corner = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-width: 0;
`;

export const RecDot = styled(motion.div)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 10px;
  height: 10px;
  background-color: #ff4444;
  border-radius: 50%;
  box-shadow: 0 0 5px #ff4444;
`;
