import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { set } from 'mockdate';
import { interval } from 'rxjs';

const FixedStartDate = '2024-10-04T11:12:21.000-04:00';
const fixedStartTime = new Date(FixedStartDate).getTime();
const realStart = Date.now();
const realNow = Date.now;
set(new Date(FixedStartDate).getTime());

@Injectable({
  providedIn: 'root',
})
export class MockDateService {
  _updateTime = interval(100)
    .pipe(takeUntilDestroyed())
    .subscribe(() => set(fixedStartTime + realNow() - realStart));
}
