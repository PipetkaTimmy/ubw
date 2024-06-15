'use client'
import { Tabs, Tab } from "@nextui-org/tabs";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

export default function Home() {
  return (
    <main className="authContainer">
      <Tabs aria-label="Options" color="primary" variant="bordered" >
        <Tab key="login" title="Авторизация" className="loginWraper">
          <Login />
        </Tab>
        <Tab key="register" title="Регистрация">
          <Register />
        </Tab>
      </Tabs>
    </main>
  )
}
