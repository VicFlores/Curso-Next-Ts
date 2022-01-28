import type { NextPage } from 'next';
import Counter from '../components/Counter';
import MainTimer from '../components/MainTimer';
import ReducerCounter from '../components/ReducerCounter';
import User from '../components/User';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Next + TypeScript</h1>
      <hr />
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <MainTimer />
      <br />
      <h2>useReducer</h2>
      <hr />
      <ReducerCounter />
    </div>
  );
};

export default Home;
