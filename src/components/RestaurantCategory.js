import ItemList from "./itemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    const handleClick =()=>{
        setShowIndex();
    }
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-50 m-auto shadow-lg p-4 my-4 w-6/12">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
