import { User } from './auth/shared/model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export interface State {
  // tslint:disable-next-line:no-any
  [key: string]: any;
  user: User | undefined;
  // meals: Meal[] | undefined;
  // selected: any;
  // list: any;
  // schedule: ScheduleItem[] | undefined;
  // date: Date | undefined;
  // workouts: Workout[] | undefined;
}

const state: State = {
  user: undefined,
  // meals: undefined,
  // selected: undefined,
  // list: undefined,
  // schedule: undefined,
  // date: undefined,
  // workouts: undefined,
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value(): State {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  // tslint:disable-next-line:no-shadowed-variable no-any
  set(name: string, state: any): void {
    this.subject.next({ ...this.value, [name]: state });
  }
}
