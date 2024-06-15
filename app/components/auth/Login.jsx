import { useState } from "react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { EyeFilledIcon } from "@/app/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/icons/EyeSlashFilledIcon";
import { useRouter } from 'next/navigation';
import { login } from '@/app/services/loginService';

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [coopNumber, setCoopNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await login(coopNumber, password);


      console.log('Login successful', data);
      if (data.role === 'admin') {
        router.push('/Admin/Users');
      } else {
        router.push('/Profile');
      }
    } catch (err) {
      setError('Ошибка авторизации. Проверьте ваш COOP номер и пароль.');
    }
  };

  return (
    <Card className="border-none">
      <div className="p-4">
        <span>Авторизация</span>
        <div className="wraperLoginInput">
          <Input
            label="COOP"
            variant="bordered"
            placeholder="Введите ваш номер COOP"
            className="input"
            value={coopNumber}
            onChange={(e) => setCoopNumber(e.target.value)}
          />
          <Input
            label="Пароль"
            variant="bordered"
            placeholder="Ведите ваш пароль"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button className="authButton" color="primary" onClick={handleLogin}>Войти</Button>
      </div>
    </Card>
  );
}

export default Login;
