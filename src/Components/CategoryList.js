import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const CategoryList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //DISPATCHING AN ACTION
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-black border-b-2 text-left flex justify-between'
        >
          <div className='w-9/12'>
            <div className='py-2'>
              <span className=' font-sans font-semibold '>
                {item.card.info.name}
              </span>
              -
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className='text-xs font-medium '>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 '>
            <div className='absolute mx-10  '>
              {' '}
              <button
                className=' rounded-md p-2 px-3 shadow-lg cursor-pointer hover:bg-orange-400 bg-orange-500 text-white border-0'
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt='img'
              className='w-[130px]'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
