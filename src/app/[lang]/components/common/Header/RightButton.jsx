import {
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineHeart,
} from 'react-icons/ai';

const RightButton = () => {
  return (
    <div className="flex items-center px-4 text-2xl">
      <AiOutlineHeart className="mr-3" />
      <AiOutlineUser className="mr-3" />
      <AiOutlineShopping />
    </div>
  );
};

export default RightButton;
