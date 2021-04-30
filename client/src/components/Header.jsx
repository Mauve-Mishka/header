import React, { useState, useEffect } from 'react';
import { GlobalOutlined, HeartOutlined, LeftOutlined, MenuOutlined, UploadOutlined } from '@ant-design/icons';
import { colors, query } from '../utils';
const { styled } = window;

const HeaderContainer = styled.header`
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  color: ${colors.mineshaft};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  height: 63px;
  padding: 0 16px;
  div {
    align-items: center;
    display: flex;
  }
  .bullet {
    baseline-shift: -10px;
    font-size: 8px;
  }
  .left {
    padding-right: 8px;
  }
  .mobile {
    padding: 0 8px;
  }
  .upload {
    margin-right: 20px;
  }
  .end, .logo, .middle, .wordmark {
    display: none;
  }
  @media (min-width: ${query.medium}) {
    height: 80px;
    padding: 0 40px;
    .end {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    .icon {
      width: auto;
      height: 32px;
    }
    .logo {
      display: flex;
      width: 100%;
    }
    .mobile {
      display: none;
    }
    .search1, .search2 {
      padding: 0 24px;
      width: 100%;
    }
  }
  @media (min-width: 950px) {
    .middle {
      display: block;
      width: 100%;
    }
    .search1 {
      display: none;
    }
  }
  @media (min-width: ${query.large}) {
    padding: 0 80px;
    .wordmark {
      display: block;
      height: 20px;
      margin-left: 6px;
      width: auto;
    }
  }
`;

const InnerHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1128px;
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
  div {
    border: 1px solid rgb(221, 221, 221);
    border-radius: 24px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    width: 100%;
  }
  div > p {
    padding: 0 16px 0 24px;
  }
  div > img {
    border-radius: 50%;
    height: 32px;
    margin: 7px 7px 7px 0;
    width: auto;
  }
`;

const HoverPill = styled.div`
  align-items: center;
  border-radius: 24px;
  color: ${colors.mineshaft};
  display: flex;
  font-size: ${props => props.big ? '16px' : '14px'};
  justify-content: center;
  margin-right: ${props => props.right && '10px'};
  padding: 12px!important;
  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

const OutlinePill = styled.div`
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 24px;
  color: ${colors.mineshaft};
  display: flex;
  justify-content: center;
  padding: 5px 5px 5px 12px;
  z-index: 200;
  img {
    border-radius: 50%;
    height: 30px;
    margin-left: 12px;
    width: 30px;
  }
  :hover {
    box-Outline: 0 2px 4px rgba(0, 0, 0, .18);
  }
`;

const DropdownContainer = styled.div`
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 0, .10);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 74px;
  width: 240px;
  z-index: 10000;
  div {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    width: 100%;
  }
  div + div {
    border-top: 1px solid rgb(223, 223, 223);
  }
`;

const DropdownItem = styled.p`
  font-size: 14px;
  font-weight: ${props => props.heavy ? '500' : '300'};
  text-align: left;
  width: 100%;
  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

const DropdownOverlay = styled.div`
  display: ${props => props.isOpen ? 'fixed' : 'none'};
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 50px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <div>
        <p>Start your search</p>
        <img src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-search.png' />
      </div>
    </SearchContainer>
  );
};

const Header = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <InnerHeaderContainer>
        <div className='mobile'>
          <LeftOutlined className='left' style={{ color: colors.mineshaft, fontSize: '16px' }} />
          <p>Homes <span className='bullet'>•</span> Airbnb</p>
        </div>
        <div className='mobile'>
          <UploadOutlined className='upload' style={{ color: colors.mineshaft, fontSize: '16px' }} />
          <HeartOutlined style={{ color: colors.mineshaft, fontSize: '16px' }} />
        </div>
        <div className='logo'>
          <img className='icon' src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-logo.png' />
          <img className='wordmark' src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/airbnb-wordmark.png' />
          <div className='search1'><Search /></div>
        </div>
        <div className='middle'>
          <div className='search2'><Search /></div>
        </div>
        <div className='end'>
          <HoverPill>Become a host</HoverPill>
          <HoverPill right big><GlobalOutlined /></HoverPill>
          <OutlinePill onClick={() => toggleOpen()}>
            <MenuOutlined />
            <img src='https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/profile-pic.png' />
          </OutlinePill>
          {isOpen &&
          <>
            <DropdownOverlay onClick={() => toggleOpen()}/>
            <DropdownContainer>
              <div>
                <DropdownItem heavy>Messages</DropdownItem>
                <DropdownItem heavy>Notifications</DropdownItem>
                <DropdownItem heavy>Trips</DropdownItem>
                <DropdownItem heavy>Saved</DropdownItem>
              </div>
              <div>
                <DropdownItem>Host your home</DropdownItem>
                <DropdownItem>Host an experience</DropdownItem>
                <DropdownItem>Refer a host</DropdownItem>
                <DropdownItem>Account</DropdownItem>
              </div>
              <div>
                <DropdownItem>Help</DropdownItem>
                <DropdownItem>Log out</DropdownItem>
              </div>
            </DropdownContainer>
          </>
          }
        </div>
      </InnerHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;