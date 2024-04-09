import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/custom hooks/useResMenu';
import HomepageSkeleton from '../lib/Skeleton/HomepageSkeleton';
import Menucategory from './Menucategory';

const Restaurantmenu = () => {
  const { id } = useParams();
  const resInfo = useResMenu(id);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <HomepageSkeleton />;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  console.log('Category List ', categories);
  return (
    <div className='text-center '>
      {categories.map((category, index) => (
        //Controlled components
        <Menucategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurantmenu;
