import React, { SyntheticEvent, useRef, useEffect } from 'react';

interface VerticalScrollProps {
  scroll: number;
  ganttHeight: number;
  ganttFullHeight: number;
  headerHeight: number;
  onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}
export const VerticalScroll: React.FC<VerticalScrollProps> = ({
  scroll,
  ganttHeight,
  ganttFullHeight,
  headerHeight,
  onScroll,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scroll;
    }
  }, [scroll]);

  return (
    <div
      style={{
        height: ganttHeight,
        marginTop: headerHeight,
        // marginLeft:"-17px",
        overflow: 'hidden auto',
        width: '20px',
        flexShrink: '0',
      }}
      onScroll={onScroll}
    >
      <div style={{ height: ganttFullHeight, width: 1 }} />
    </div>
  );
};
