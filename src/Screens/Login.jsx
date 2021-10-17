import { Alert, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router';
import { login } from '../Redux/Actions/LoginAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    CustomInput,
    CustomInputPassword,
    ForgetPassword,
    LoginBackground,
    LoginButton,
    LoginCard,
} from '../StyledComponent';

const Login = ({ location }) => {
    let history = useHistory();
    let dispatch = useDispatch();

    let userInfo = useSelector((state) => state.user);

    const redirect = location.search ? location.search.split('=')[1] : '/dashboard';

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (userInfo && userInfo?.details?._id) {
            history.push(redirect);
        }
    }, [userInfo?.details?._id]);

    const loginHandler = (data) => {
        dispatch(login(data));
    };

    return (
        <LoginBackground>
            <LoginCard>
                <h1 className="text-center text-2xl">Login</h1>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <Controller
                        {...register('email', { required: true })}
                        control={control}
                        render={({ field }) => (
                            <CustomInput
                                size="large"
                                type="email"
                                placeholder="Enter Email Address"
                                autoComplete="false"
                                {...field}
                                prefix={<UserOutlined />}
                            />
                        )}
                    />
                    {errors.email && (
                        <Alert message="This field is required" type="error" showIcon />
                    )}

                    <Controller
                        {...register('password', { required: true })}
                        control={control}
                        render={({ field }) => (
                            <CustomInputPassword
                                size="large"
                                placeholder="Input Password"
                                {...field}
                                prefix={<LockOutlined />}
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                            />
                        )}
                    />
                    {errors.password && (
                        <Alert message="This field is required" type="error" showIcon />
                    )}
                    {/* <Controller
                        {...register('rememberPassword', { required: 'This field is required' })}
                        control={control}
                        render={({ field }) => (
                            <CustomCheckBox className="mt-4" {...field}>
                                Remember Password
                            </CustomCheckBox>
                        )}
                    /> */}

                    {/* <Checkbox onChange={onChange}>Checkbox</Checkbox> */}

                    <LoginButton type="primary" htmlType="submit">
                        Log In
                    </LoginButton>
                </form>

                <ForgetPassword>
                    <p>Forget Password ?</p>
                    <Link to="/reset-link">
                        <Button type="link">Get reset link</Button>
                    </Link>
                </ForgetPassword>
            </LoginCard>
        </LoginBackground>
    );
};

// styled components

export default Login;
