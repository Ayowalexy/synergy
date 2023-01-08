import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  InputContainer,
  InputIcon,
} from "../../../styles/components/Input";
import { formSchema, signinSchema } from "../../../utils/schema";
import OrangeEye from "../../../assets/svgs/others/orange_eye.svg";
import {
  ButtonContain,
  ButtonOrange,
  ButtonOutline,
} from "../../../styles/components/Button";
import Req from "../../../assets/svgs/others/req.svg";

import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";

interface IsigninField {
  email: string;
  password: string;
}

const label = { inputProps: { "aria-label": "Switch demo" } };
export default function form() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsigninField>({
    mode: "onTouched",
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data: IsigninField) => {
    console.log(data, "hey");
    navigate("/feed");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

     

        <div onClick={() => navigate('/signin')} className="btn">
          <ButtonOrange type="submit" disabled={errors.password ? true : false}>
            Log In
          </ButtonOrange>
        </div>
      </form>
    </div>
  );
}
