import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { numberOfFacts } from '../features/facts/factsStarWarsSlice';

function FactsStarWars() {
  const dispatch = useDispatch();
  const facts = useSelector((state) => state.facts.getFacts);

  const [count, setCount] = useState('');

  const hendleChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    dispatch(numberOfFacts(count));
  }, [count, dispatch]);

  return (
    <div>
      <input
        value={count}
        onChange={hendleChange}
        className='w-50'
        type='number'
        min='0'
        max='5'
        name='countFacts'
        title='Введите число от 1 до 5'
        placeholder='Введите число от 1 до 5'
      />
      <ul>
        {facts &&
          facts.map((fact) => (
            <li key={fact.id} id={fact.id}>
              {fact.factText}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FactsStarWars;
