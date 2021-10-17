import { Button, Card, Checkbox, Input } from 'antd';
import Styled from 'styled-components';

export const LoginBackground = Styled.div`
    background-image: url('/images/bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    position: relative;
`;

export const LoginCard = Styled(Card)`
    background: #001529;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.56) !important;
    position: absolute;
    padding: 31px 31px;
    border: 1px solid transparent;
    & h1 {
        color: #ffff;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 991px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    @media (min-width: 1024px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 450px;
    }
`;

export const CustomInput = Styled(Input)`
    background: #352e3d !important;
    color: #d3cbdb !important;
    padding: 10px 15px;
    border: 1px solid transparent !important;
    box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    margin: 10px 0;
    & input {
        background: #352e3d !important;
        color: #d3cbdb !important;
    }
    &:hover,
    &:active,
    &:focus {
        outline: 1px solid #352e3d !important;
        border: 1px solid #352e3d !important;
        box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    }
`;

export const CustomInputPassword = Styled(Input.Password)`
    background: #352e3d !important;
    color: #d3cbdb !important;
    padding: 10px 15px;
    border: 1px solid transparent !important;
    box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    margin: 20px 0;
    & input {
        background: #352e3d !important;
        color: #d3cbdb !important;
    }
    &:hover,
    &:active,
    &:focus {
        outline: 1px solid #352e3d !important;
        border: 1px solid #352e3d !important;
        box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
    }
`;

export const CustomCheckBox = Styled(Checkbox)`
    color: #d3cbdb;
    font-weight: 600;
`;

export const LoginButton = Styled(Button)`
    background: #352e3d;
    display: block;
    margin: 10px 0;
    width: 100%;
    height: 45px;
    border: 0px;
    font-weight: 600px;
    &:hover {
        background: #534b8f;
    }
`;

export const ForgetPassword = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span,
    & p {
        color: #d3cbdb;
        font-weight: 600;
        font-size: 15px;
    }
    & p {
        padding-top: 10px;
    }
`;
