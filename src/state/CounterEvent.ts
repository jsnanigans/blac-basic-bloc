import {Bloc} from 'bloc-react';

export enum CounterEvent {
  Increment = 'Increment',
  Decrement = 'Decrement',
}

export default class CounterBloc extends Bloc<CounterEvent, number> {
  constructor() {
    super(0);

    this.on(CounterEvent.Increment, (event, emit) => {
      emit(this.state + 1);
    });
  }
}
