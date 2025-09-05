import React from 'react';
import styled from 'styled-components';

//글자버튼 스타일
const Textbtn = styled.button`
    background-color: ${(props) => (props.isWhite ? '#ffffff' : '#3498db')}; 
    border: 3px solid #3498db;
    color: ${(props) => (props.isWhite ? '#3498db' : 'white')};
    padding: 12px 24px;
    font-size: 16px;   
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${(props) => (props.isWhite ? '#f0f0f0' : '#2980b9')};
    }
    &:active {
        background-color: ${(props) => (props.isWhite ? '#e0e0e0' : '#1c6ca1')};
    }
    &:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
    }
`;

//글자버튼 컴포넌트
export const Textstylebtn = ({ children, ...props }) => {
  return <Textbtn {...props}>{children}</Textbtn>;
};

export  const  PageButton = styled.button`
  background-color: ${({ bg }) => ( bg ?  bg  : 'white')};
  color: ${
            function({ textcolor }) { 
              return textcolor ? textcolor  : 'black' }
            };
  border: 1px solid #ccc;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const HamburgerIcon = () => (
    <svg width="24" height="24" fill="currentColor">
      <rect y="4" width="24" height="2" />
      <rect y="11" width="24" height="2" />
      <rect y="18" width="24" height="2" />
    </svg>
);

export const CloseIcon = () => (
    <svg width="24" height="24" fill="currentColor">
      <line x1="4" y1="4" x2="20" y2="20" stroke="black" strokeWidth="2" />
      <line x1="20" y1="4" x2="4" y2="20" stroke="black" strokeWidth="2" />
    </svg>
);
  