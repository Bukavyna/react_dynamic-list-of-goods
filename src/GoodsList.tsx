import React, {CSSProperties} from 'react';
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
        className="good-item"
        style={{ '--color': good.color } as CSSProperties}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
