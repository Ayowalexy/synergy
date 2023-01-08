import React, { useEffect, useState } from "react";
import {
  ButtonContain,
  ButtonOrange,
  ButtonOutline,
} from "../../../styles/components/Button";
import {
  Input,
  InputContainer,
  InputIcon,
} from "../../../styles/components/Input";
import Eye from "../../../assets/svgs/others/eye.svg";
import Req from "../../../assets/svgs/others/req.svg";

import OrangeEye from "../../../assets/svgs/others/orange_eye.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../../utils/schema";
import { isEmpty } from "lodash";
import { UsePasswordStrength } from "../../../hooks/UsePasswordStrength";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import * as lodash from "lodash";
interface IsignupField {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Form() {
  const [visible, setVisible] = useState(false);
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsignupField>({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: IsignupField) => {
    console.log(data);
    navigate("/welcome");
  };

  const { number, upper, lower, length } = UsePasswordStrength(pass);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div>
            <label>First Name</label>
            <InputContainer>
              <Input
                border={errors.firstName && "1px solid red"}
                type={"text"}
                width={"95%"}
                {...register("firstName", { required: true })}
              />
            </InputContainer>
            <p>{errors.firstName?.message}</p>
          </div>
          <div>
            <label>Last Name</label>
            <InputContainer>
              <Input
                border={errors.lastName && "1px solid red"}
                type={"text"}
                width={"93%"}
                {...register("lastName", { required: true })}
              />
            </InputContainer>
            <p>{errors.lastName?.message}</p>
          </div>
        </div>
        <div>
          <label>Email Address</label>
          <InputContainer>
            <Input
              border={errors.email && "1px solid red"}
              type={"text"}
              width={"100%"}
              {...register("email", { required: true })}
            />
          </InputContainer>
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Password</label>

          <InputContainer>
            <Input
              border={errors.password && "1px solid red"}
              type={visible ? "text" : "password"}
              width={"100%"}
              {...register("password", { required: true })}
              onChange={(e) => setPass(e.target.value)}
            />
            <InputIcon onClick={togglePasswordVisibility}>
              {visible ? (
                <AiFillEye
                  fontSize={33}
                  color={!lodash.isEmpty(pass) ? "#ED7832" : "#262E31"}
                />
              ) : (
                <AiFillEyeInvisible
                  fontSize={33}
                  color={!lodash.isEmpty(pass) ? "#ED7832" : "#262E31"}
                />
              )}

              {/* <img src={OrangeEye} alt="password_icon" /> */}
            </InputIcon>
          </InputContainer>
          <p>{errors.password?.message}</p>

          {!isEmpty(pass) ? (
            <div className="validate">
              <ul>
                <li style={{ color: upper ? "#0D6211" : "black" }}>
                  One upper case letter
                </li>
                <li style={{ color: number ? "#0D6211" : "#A49A90" }}>
                  One number
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        {upper && length && number ? (
          <div>
            <label>Confirm Password</label>
            <InputContainer>
              <Input
                border={errors.confirmPassword && "1px solid red"}
                type={visible ? "text" : "password"}
                width={"100%"}
                {...register("confirmPassword", { required: true })}
              />
              <InputIcon onClick={togglePasswordVisibility}>
                <img src={Eye} alt="password_icon" />
              </InputIcon>
            </InputContainer>
            {errors.confirmPassword && (
              <p>
                <span>
                  <img
                    src={Req}
                    alt="required"
                    style={{ marginBottom: "-1px" }}
                  />
                </span>{" "}
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        ) : (
          ""
        )}
        <div className="btn">
          {upper && length && number ? (
            <ButtonOrange type="submit">Create Account</ButtonOrange>
          ) : (
            <ButtonContain type="submit" disabled>
              Create Account
            </ButtonContain>
          )}
        </div>
      </form>
    </div>
  );
}
