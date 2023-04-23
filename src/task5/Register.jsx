import React, { useState } from "react";
import "../App.css";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const Register = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("please insert your full name!"),
    email: yup.string().email().required("please insert your email!"),
    password: yup
      .string()
      .min(3)
      .max(20)
      .required("please insert password please"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "the password should much!")
      .required("please confirm your password plesase"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="all">
      <div className="whole">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Enter full name . . . "
            {...register("fullName")}
          />
          <div className="error"> {errors.fullName?.message}</div>

          <input
            type="text"
            placeholder="Enter your email . . . "
            {...register("email")}
          />
          <div className="error"> {errors.email?.message}</div>
          <input
            type="text"
            placeholder="Enter your password . . . "
            {...register("password")}
          />
          <div className="error"> {errors.password?.message}</div>
          <input
            type="text"
            placeholder="Confirm your password . . . "
            {...register("confirmPassword")}
          />
          <div className="error"> {errors.confirmPassword?.message}</div>

          <input type="submit" className="button" />
        </form>
      </div>
    </div>
  );
};
export default Register;
