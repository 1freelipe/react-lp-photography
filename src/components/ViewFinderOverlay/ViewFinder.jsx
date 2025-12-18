import React from 'react';
import { OverlayContainer, Line, Corner, RecDot } from './styled';

const ViewfinderOverlay = () => {
  const lineTransition = { duration: 2, ease: 'easeInOut' };

  return (
    <OverlayContainer>
      <Line
        style={{ top: 0, bottom: 0, left: '33.33%', width: '1px' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={lineTransition}
      />
      <Line
        style={{ top: 0, bottom: 0, right: '33.33%', width: '1px' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={lineTransition}
      />

      <Line
        style={{ left: 0, right: 0, top: '33.33%', height: '1px' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={lineTransition}
      />
      <Line
        style={{ left: 0, right: 0, bottom: '33.33%', height: '1px' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={lineTransition}
      />

      <Corner
        style={{ top: 20, left: 20, borderTopWidth: 2, borderLeftWidth: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <Corner
        style={{ top: 20, right: 20, borderTopWidth: 2, borderRightWidth: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <Corner
        style={{
          bottom: 20,
          left: 20,
          borderBottomWidth: 2,
          borderLeftWidth: 2,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <Corner
        style={{
          bottom: 20,
          right: 20,
          borderBottomWidth: 2,
          borderRightWidth: 2,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <RecDot
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </OverlayContainer>
  );
};

export default ViewfinderOverlay;
