import { Button, Card, Checkbox, Input } from "antd";
import styled from "styled-components";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined
} from "@ant-design/icons";

const Login = () => {
  return (
    <LoginBackground>
      <LoginCard>
        <h1>Login</h1>
        <CustomInput
          size="large"
          type="email"
          placeholder="Enter Email Address"
          prefix={<UserOutlined />}
        />
        <CustomInputPassword
          size="large"
          placeholder="Input Password"
          prefix={<LockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <CustomCheckBox>Remember Password</CustomCheckBox>
        <LoginButton type="primary">Log In</LoginButton>

        <ForgetPassword className="flex justify-between align-middle">
          <span>Forget Password ?</span>
          <Button type="link">Get reset link</Button>
        </ForgetPassword>
      </LoginCard>
    </LoginBackground>
  );
};

// styled components
const LoginBackground = styled.div`
  background-image: url("/images/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const LoginCard = styled(Card)`
  background: #302938;
  box-shadow: 2px 4px 4px solid #000000;
  position: absolute;
  padding: 31px 31px;
  border: 1px solid #000000;
  & h1 {
    color: #ffff;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 992px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
  }

  @media (min-width: 1024px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
  }
`;

const CustomInput = styled(Input)`
  background: #352e3d !important;
  color: #d3cbdb !important;
  padding: 10px 15px;
  border: 1px solid #030303 !important;
  box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
  margin: 10px 0;
  & input {
    background: #352e3d !important;
    color: #d3cbdb !important;
  }
  &:hover,
  &:active,
  &:focus {
    outline: 0px solid #352e3d !important;
    border: 1px solid #352e3d !important;
    box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
  }
`;

const CustomInputPassword = styled(Input.Password)`
  background: #352e3d !important;
  color: #d3cbdb !important;
  padding: 10px 15px;
  border: 1px solid #030303 !important;
  box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
  margin: 20px 0;
  & input {
    background: #352e3d !important;
    color: #d3cbdb !important;
  }
  &:hover,
  &:active,
  &:focus {
    outline: 0px solid #352e3d !important;
    border: 1px solid #352e3d !important;
    box-shadow: 0 0 0 0px rgba(24, 144, 255, 0.2);
  }
`;

const CustomCheckBox = styled(Checkbox)`
  color: #d3cbdb;
  font-weight: 600;
`;

const LoginButton = styled(Button)`
  background: #8e80f5;
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

const ForgetPassword = styled.div`
  & span {
    color: #d3cbdb;
    font-weight: 600;
    font-size: 15px;
  }
`;

export default Login;