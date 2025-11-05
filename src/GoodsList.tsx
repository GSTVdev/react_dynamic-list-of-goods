import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{
          color:
            good.color === 'red'
              ? 'rgb(255, 0, 0)'
              : good.color === 'green'
                ? 'rgb(0, 128, 0)'
                : 'rgb(0, 0, 255)',
        }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
