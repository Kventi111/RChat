import React from "react";

import { Form, Icon, Input, Button } from "antd";
import "./style.css";

export function RegisterForm({
  firstName,
  lastName,
  email,
  password,
  serverMessage,
  onChange,
  onRegister
}) {
  return (
    <Form className="loginForm">
      <p className="form__title">Register</p>
      <Form.Item>
        <Input
          id="firstName"
          size={"large"}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Имя"
          value={firstName}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id="lastName"
          size={"large"}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Фамилия"
          value={lastName}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id="email"
          size={"large"}
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Почта"
          value={email}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id="password"
          size={"large"}
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Пароль"
          value={password}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <span
          style={{
            color: serverMessage.status === "success" ? "green" : "red"
          }}
        >
          {serverMessage.text}
        </span>
      </Form.Item>
      <Button
        size="large"
        onClick={onRegister}
        type="primary"
        className="login-form-button"
      >
        Регистрация
      </Button>
    </Form>
  );
}

export default RegisterForm;
