import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalOutlined, HeartOutlined, LeftOutlined, MenuOutlined, UploadOutlined } from '@ant-design/icons';
import { colors, query } from '../utils';

const HeaderContainer = styled.header`
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  color: ${colors.mineshaft};
  display: flex;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  height: 63px;
  justify-content: space-between;
  padding: 0 16px;
  div {
    align-items: center;
    display: flex;
    padding: 0 8px;
  }
  .bullet {
    baseline-shift: -10px;
    font-size: 8px;
  }
  .left {
    padding-right: 8px;
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
    div {
      padding: 0;
    }
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
    .wordmark {
      display: block;
    }
  }
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
  border: ${props => props.outline && '1px solid rgb(221, 221, 221)'};
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
  return (
    <HeaderContainer>
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
        <HoverPill outline>
          <MenuOutlined />
          <img></img>
        </HoverPill>
      </div>
    </HeaderContainer>
  );
};

export default Header;