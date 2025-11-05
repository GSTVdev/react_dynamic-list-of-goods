import React, { useState } from 'react';
import './App.scss';
import { MemoizedGoodsList as GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {
        console.error('Erro ao carregar os produtos');
        setGoods([]);
      });
  };

  const handleLoadFirst5 = () => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {
        console.error('Erro ao carregar os 5 primeiros produtos');
        setGoods([]);
      });
  };

  const handleLoadRed = () => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {
        console.error('Erro ao carregar os produtos vermelhos');
        setGoods([]);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
