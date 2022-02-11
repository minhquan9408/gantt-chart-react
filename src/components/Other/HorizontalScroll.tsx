import React, { SyntheticEvent, useRef, useEffect } from 'react';

interface HorizontalScrollProps {
  scroll: number;
  svgWidth: number;
  taskListWidth: number;
  onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  scroll,
  svgWidth,
  taskListWidth,
  onScroll,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scroll;
    }
  }, [scroll]);

  return (
    <div
      dir="ltr"
      style={{
        margin: `0px 0px 0px ${taskListWidth}px`,
        overflow: 'auto',
        maxWidth: '100%',
      }}
      onScroll={onScroll}
    >
      <div style={{ width: svgWidth, height: 1 }} />
    </div>
  );
};
