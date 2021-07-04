import React, { useContext } from 'react';
import { Wrapper } from './Rightbar.styles';
import RightbarUp from 'components/molecules/RightbarUp/RightbarUp';
import RightbarMiddle from 'components/molecules/RightbarMiddle/RightbarMiddle';
import RightbarBottom from 'components/molecules/RightbarBottom/RightbarBottom';
import { WrapperContext } from 'providers/DateProvider';

const Rightbar = () => {
  const { openState } = useContext(WrapperContext);
  const [isOpen, setOpenState] = openState;

  const closeSidebar = () => {
    setOpenState({
      ...isOpen,
      rightbarContainer: false,
    });
  };
  return (
    <Wrapper isOpacity={isOpen.rightbarContainer}>
      <RightbarUp closeSidebar={closeSidebar} />
      <RightbarMiddle />
      <RightbarBottom />
    </Wrapper>
  );
};

export default Rightbar;
