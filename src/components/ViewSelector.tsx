import React, { ChangeEvent } from 'react';
import '../index.css';
import { ViewMode } from '../index';

type ViewSelectorProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};
export const ViewSelector: React.SFC<ViewSelectorProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'hour':
        return onViewModeChange(ViewMode.Hour);
      case 'quarterDay':
        return onViewModeChange(ViewMode.QuarterDay);
      case 'halfDay':
        return onViewModeChange(ViewMode.HalfDay);
      case 'day':
        return onViewModeChange(ViewMode.Day);
      case 'week':
        return onViewModeChange(ViewMode.Week);
      case 'month':
        return onViewModeChange(ViewMode.Month);
    }
  };
  return (
    <div className="ViewContainer">
      <span>
        Views:&nbsp;
        <select defaultValue={'day'} onChange={handleOnChange}>
          <option value="hour">Hour</option>
          <option value="quarterDay">Quarter Day</option>
          <option value="halfDay">Half day</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </span>
      <div className="Switch">
        Show Task List:&nbsp;
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
      </div>
    </div>
  );
};
