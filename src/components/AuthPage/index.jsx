import React, { useState } from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";
import { Modal, Form, Input, Select, Button, message } from "antd";
import firebase from "../../firebase";

const { Option } = Select;

function AuthPage(props) {
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [loaderForm, setLoaderForm] = useState(true);

  const [reCapStatus, setReCapStatus] = useState(false);

  const [isSignIn, setSignIn] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const setUpRecaptch = () => {
    setReCapStatus(true);
    debugger;
    if (!reCapStatus) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "re-captcha-container",
        {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            debugger;
          },
        }
      );
    }
  };

  const authWithPhone = (phone) => {
    setUpRecaptch();
    debugger;
    let chet = firebase;
    let appVerifier = window.recaptchaVerifier;
    debugger;

    firebase
      .auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        debugger;
        window.confirmationResult = confirmationResult;
        let code = window.prompt(
          `We sent the confirmation code to your number`
        );
        confirmationResult
          .confirm(code)
          .then(function (result) {
            // User signed in successfully.

            if (!result.additionalUserInfo.isNewUser) {
              props.setDataUserThunk(result.user.uid, "", false);
            } else {
              props.setDataUserThunk(
                result.user.uid,
                result.user.phoneNumber,
                true
              );
            }
            setSignIn(true);
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            console.log(error);
            setLoaderForm(true);
            message.error("Error; Bad verification code");
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        console.log(error);
        setLoaderForm(true);
        message.error("Error; SMS not sent;");
      });
  };

  const onFinish = (values) => {
    let midPhone = values.prefix + values.phone;
    authWithPhone(midPhone);
    setLoaderForm(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="+7">+7</Option>
        <Option value="+1">+1</Option>
      </Select>
    </Form.Item>
  );

  const handleOk = () => {
    let data = form.getFieldsValue();

    let midPhone = data.prefix + data.phone;
    debugger;
    authWithPhone("+11233211232");
    setLoaderForm(false);

    setIsModalVisible(false);
  };

  return (
    <div style={{ height: "100vh" }} className={s.firstPage}>
      <div>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 951.000000 290.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.16, written by Peter Selinger 2001-2019
          </metadata>
          <g
            transform="translate(0.000000,290.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M8295 2512 c-128 -62 -155 -162 -155 -589 l0 -243 -60 0 -61 0 3 -92
3 -93 57 -3 58 -3 2 -547 3 -547 118 -3 117 -3 0 551 0 550 100 0 100 0 0 95
0 94 -97 3 -98 3 -3 225 c-3 254 5 319 45 350 31 24 80 26 130 5 19 -8 37 -15
39 -15 2 0 4 56 4 125 l0 125 -27 12 c-16 6 -75 13 -133 15 -88 3 -111 1 -145
-15z"
            />
            <path
              d="M1470 1455 l0 -1055 120 0 120 0 0 1055 0 1055 -120 0 -120 0 0
-1055z"
            />
            <path
              d="M2990 1455 l0 -1055 115 0 115 0 1 78 c0 64 2 74 12 58 84 -133 117
-156 222 -156 187 1 272 132 305 469 27 275 -4 571 -74 708 -27 55 -82 108
-132 129 -19 8 -63 14 -99 14 -97 0 -139 -26 -217 -132 -16 -22 -17 2 -18 460
l0 482 -115 0 -115 0 0 -1055z m438 15 c73 -45 97 -175 89 -494 -5 -240 -17
-298 -72 -353 -28 -28 -40 -33 -79 -33 -118 0 -152 120 -143 503 5 252 16 308
72 364 39 39 83 43 133 13z"
            />
            <path
              d="M6453 2330 c-142 -33 -255 -154 -297 -317 -20 -77 -21 -238 -1 -321
28 -119 73 -184 272 -392 158 -165 189 -206 219 -278 27 -64 33 -186 13 -253
-46 -153 -235 -195 -402 -89 -26 16 -50 30 -52 30 -3 0 -5 -58 -5 -128 l0
-129 48 -26 c134 -73 308 -76 441 -7 61 31 140 113 178 185 84 159 82 407 -4
565 -48 89 -94 147 -228 287 -210 220 -239 267 -240 388 0 91 23 152 80 204
78 72 167 78 285 18 36 -17 68 -33 73 -35 4 -2 7 52 7 121 l0 125 -48 20 c-27
12 -69 26 -93 31 -51 12 -199 13 -246 1z"
            />
            <path
              d="M715 2298 c-3 -13 -64 -293 -135 -623 -72 -330 -137 -629 -145 -665
-8 -36 -40 -180 -70 -320 -30 -140 -57 -263 -59 -272 -4 -16 7 -18 120 -18 68
0 124 1 124 3 0 1 16 83 35 182 19 99 35 181 35 183 0 1 87 1 192 0 l193 -3
35 -182 35 -183 128 0 c118 0 128 1 123 18 -3 9 -93 431 -201 937 -108 506
-200 930 -205 943 -9 21 -15 22 -105 22 -90 0 -95 -1 -100 -22z m150 -728 c20
-140 51 -333 69 -427 l33 -173 -154 0 c-84 0 -153 2 -153 5 0 3 20 112 44 243
39 207 77 447 102 647 l8 60 8 -50 c4 -27 23 -165 43 -305z"
            />
            <path
              d="M8830 1865 l0 -185 -65 0 -66 0 3 -92 3 -93 63 -3 62 -3 0 -544 0
-545 120 0 120 0 0 545 0 544 63 3 62 3 3 93 3 92 -66 0 -65 0 0 185 0 185
-120 0 -120 0 0 -185z"
            />
            <path
              d="M5415 1701 c-65 -16 -132 -70 -187 -151 -17 -25 -17 -24 -17 53 l-1
77 -120 0 -120 0 0 -640 0 -640 120 0 119 0 3 452 c3 411 5 457 21 493 37 82
85 113 188 122 l69 6 0 118 c0 133 3 129 -75 110z"
            />
            <path
              d="M2135 1681 c-109 -49 -171 -182 -195 -420 -27 -276 2 -587 69 -726
51 -108 123 -155 233 -155 91 0 138 26 190 107 l43 64 3 -75 3 -76 114 0 115
0 0 640 0 640 -115 0 -115 0 0 -67 0 -68 -55 61 c-33 38 -70 68 -95 78 -54 21
-145 20 -195 -3z m244 -205 c73 -38 93 -117 99 -390 4 -225 -5 -332 -35 -409
-44 -109 -172 -118 -222 -15 -34 72 -43 172 -39 427 4 223 5 239 28 296 38 91
102 125 169 91z"
            />
            <path
              d="M4231 1689 c-81 -25 -156 -92 -202 -183 -68 -131 -99 -369 -80 -603
31 -362 153 -523 396 -523 261 0 385 183 402 590 15 383 -68 623 -245 703 -54
24 -213 34 -271 16z m194 -230 c23 -21 40 -48 50 -82 22 -74 35 -318 25 -477
-13 -204 -43 -278 -120 -301 -83 -25 -148 43 -170 181 -13 85 -13 437 1 520
14 89 41 145 81 170 48 29 91 26 133 -11z"
            />
            <path
              d="M7365 1687 c-92 -36 -160 -103 -207 -202 -51 -110 -71 -233 -71 -445
0 -218 20 -337 77 -456 68 -144 169 -208 326 -208 194 0 313 107 370 331 53
204 43 556 -21 740 -40 118 -110 196 -209 234 -58 22 -215 25 -265 6z m207
-234 c39 -37 57 -104 69 -258 18 -210 -1 -447 -42 -526 -25 -50 -55 -69 -107
-69 -36 0 -50 6 -77 33 -18 18 -38 51 -44 72 -22 79 -34 241 -28 405 6 179 18
255 50 312 39 71 122 86 179 31z"
            />
          </g>
        </svg>
      </div>
      <div className={s.contMosHeader}>Авторизоваться через mos.ru:</div>
      <Button
        className={s.contMosLogo}
        onClick={() => {
          /* showModal(); */
          props.setAuth();
          /*  handleOk(); */
        }}
      >
        MOC РУ
      </Button>
      {/* <Modal
        title="Авторизируйтесь, чтобы продолжить"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={false}
      >
        <Form
          form={form}
          name="horizontal_login"
          onFinish={onFinish}
          initialValues={{
            prefix: "+7",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Введите номер телефона!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                className={s.Input}
                placeholder="Номер телефона"
              />
            </Form.Item>
              <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                <span>Вход</span>
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal> */}

      <div>
        <div style={{ marginLeft: "-20px" }}>После авторизации вы сможете:</div>
        <div>
          <div>• следить за расписанием</div>
          <div>• просматривать договоры</div>
          <div>• заполнить заранее поля ввода</div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
