//-----import 외부 소스
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

//-----import 내부 소스
import { InputWithLabel, Button } from "components/index";
import { myCSS, myTheme } from "style/index";
import { API_URL } from "config/constants";

const { colors, fontStyles } = myTheme;

function LoginPage() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputs.id.length > 4 && inputs.password.length >= 4) {
      axios
        .post(
          `${API_URL}/login`,
          {
            user_id: inputs.id,
            password: inputs.password,
          },
          { withCredentials: true }
        )
        .then((result) => {
          console.log("AXiOS LOGIN POST : SUCCESS");
          if (result.data.isLogin) {
            console.log(result.data);
            alert(`${result.data.User.user_name}님, 안녕하세요`);
            window.location.replace("/");
          } else {
            alert("아이디와 비밀번호를 확인부탁드립니다");
          }
        })
        .catch((err) => {
          console.log("AXiOS LOGIN POST : ERR");
          alert("잠시 후 시도해주세요");
        });
    } else alert("아이디와 비밀번호를 확인부탁드립니다.");
  };
  return (
    <Wrapper>
      <Container>
        <Title>로그인</Title>
        <Form onSubmit={onSubmit}>
          <InputWithLabel type="text" name="id" onChange={onChange} required>
            아이디
          </InputWithLabel>
          <InputWithLabel
            type="password"
            name="password"
            onChange={onChange}
            required
          >
            비밀번호
          </InputWithLabel>
          <Button type="submit" width="20rem" maxWidth="250px">
            로그인
          </Button>
        </Form>
        <LinktoRegister to="/register">회원가입</LinktoRegister>
      </Container>
    </Wrapper>
  );
}

export default LoginPage;

//-----스타일
const Wrapper = styled.div`
  ${myCSS.center}
  width: 26.6rem;

  background-color: ${colors.l1};
  border-radius: 5% 5%;

  margin: auto;
  margin-top: 5rem;
  padding: 2rem;
`;
const Container = styled.div`
  ${myCSS.flexColumn}
  align-items: center;
`;
const Form = styled.form`
  ${myCSS.flexColumn}
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Title = styled.div`
  ${fontStyles.semiTitle}
`;
const LinktoRegister = styled(Link)`
  ${fontStyles.mini};
  align-self: flex-end;
  margin: 0.4rem;
  text-decoration: none;
`;
