import CounterBloc, { CounterEvent } from "./state/CounterEvent";
import { useBloc } from "./state/state";

const Count = () => {
  const [state, bloc] = useBloc(CounterBloc, {
    create: () => new CounterBloc(),
  });

  const handleClick = () => {
    bloc.add(CounterEvent.Increment);
  };

  return <button onClick={handleClick}>Count: {state}</button>;
};

export default Count;
