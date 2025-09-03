import React, {useState} from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';
import {Good} from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGood = () => {
    return getAll().then(handleLoadAll => {
      setGoods(handleLoadAll);
    });
  };

  const handle5FirstGood = () => {
    return get5First().then(goods5 => {
      setGoods(goods5);
    });
  };

  const handleGoodRed = () => {
    return getRed().then(goodsRed => {
      setGoods(goodsRed);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadGood}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGood}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGoodRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods}/>
    </div>
  )
};
