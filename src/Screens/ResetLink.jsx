import { Alert, message } from 'antd';
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CustomInput, LoginBackground, LoginButton, LoginCard } from '../StyledComponent';

const ResetLink = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const emailSubmit = (data) => {
        message
            .loading('Email is sending', 2.5)
            .then(() => message.success('Email has been sent', 2.5))
            .then(() => message.info('Please check your email', 3.5));
    };
    return (
        <LoginBackground>
            <LoginCard className="shadow-lg ">
                <h1 className="text-lg pb-3 text-center"> Get Password Reset Link</h1>
                <form onSubmit={handleSubmit(emailSubmit)}>
                    <Controller
                        {...register('email', { required: 'This field is required' })}
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
                    <LoginButton type="primary" htmlType="submit">
                        Get reset link in email
                    </LoginButton>
                    <Link to="/">
                        <LoginButton type="primary" icon={<ArrowLeftOutlined />}>
                            Back
                        </LoginButton>
                    </Link>
                </form>
            </LoginCard>
        </LoginBackground>
    );
};

export default ResetLink;
