/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {CalendarCell} from './CalendarCell';
import {CalendarState, RangeCalendarState} from '@react-stately/calendar';
import React from 'react';

interface CalendarTableBodyProps {
  state: CalendarState | RangeCalendarState
}

export function CalendarTableBody({state}: CalendarTableBodyProps) {
  return (
    <tbody>
      {
        [...new Array(state.weeksInMonth).keys()].map(weekIndex => (
          <tr key={weekIndex} aria-rowindex={weekIndex + 2}>
            {
              [...new Array(7).keys()].map(dayIndex => (
                <CalendarCell
                  key={dayIndex}
                  colIndex={dayIndex + 1}
                  state={state}
                  date={state.getCellDate(weekIndex, dayIndex)} />
                )
              )
            }
          </tr>
        ))
      }
    </tbody>
  );
}
