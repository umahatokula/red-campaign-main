"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  emailOrPhone: string;
};

function RedShow() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="h-auto mt-16">
      <p className="m-5 text-base font-semibold leading-4 text-red">
        The RED Show
      </p>
      <div
        className={`bg-[url(../public/red-show-bg.svg)] h-full bg-no-repeat bg-contain tablet:bg-cover pt-60 tablet:pt-80 bg-black`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 p-5 tablet:p-10 gap-y-5 tablet:gap-y-10">
            <div className="w-full">
              <label className="form__label">Name</label>
              <input className="form__input" {...register("name")} />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="w-full">
              <label className="form__label">Email or Phone Number</label>
              <input
                className="form__input"
                {...register("emailOrPhone", { required: true })}
              />
              {errors.emailOrPhone && <span>This field is required</span>}
            </div>
            <div className="flex items-center justify-center">
              <input className="form__checkbox" type="checkbox" />{" "}
              <span className="ml-2 text-sm text-white">
                I’d like to receive enlightening emails & messages.
              </span>
            </div>
            <div className="flex justify-center ">
              <button className="btn__red" type="submit">
                Reserve Your Seat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RedShow;
