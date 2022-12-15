import { Button, Checkbox, Form, Input } from 'antd';
import { toast } from 'react-hot-toast';
import LoginValidation from '../validations/LoginValidation';

export interface LoginDTO {
  email: string;
  password: string;
}

const Login = () => {
  const onSubmit = (values: LoginDTO) => {
    toast.success('Connecté !');
  };
  const onFailed = (error: unknown) => {
    console.log(error);
    toast.error('Il y a des erreurs');
  };
  const initialValues: LoginDTO = {
    email: 'sebastien@localhost.com',
    password: '123',
  };
  console.log(LoginValidation);
  return (
    <div className="mt-24 flex justify-center">
      <Form
        name="login"
        initialValues={initialValues}
        onFinish={onSubmit}
        onFinishFailed={onFailed}
        autoComplete="off"
        className="p-16 rounded shadow min-w-[450px]">
        <h1 className="text-3xl mb-8">Connexion</h1>
        <Form.Item name="email" rules={LoginValidation.email}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="password" rules={LoginValidation.password}>
          <Input type="password" placeholder="Mot de passe" className="mt-4" />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-end mt-8">
            <Button type="primary" htmlType="submit">
              Se connecter
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
