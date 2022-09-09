import React from "react";
import { Button, OutlineButton } from "../../components/common/Button";
import InputField from "../../components/common/Form/InputField";
import { useForm } from "react-hook-form";
import { emailRegEx } from "../../utils/regExp";

interface Props {
  send: any;
  state: any;
}

type FormData = {
  name: string;
  email: string;
};

const CheckoutCart = ({ send }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "all",
  });

  const onSubmit = handleSubmit((data) => {
    send("FINISH_PURCHASE", data);
  });

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-xl">Checkout</h2>
      </div>

      <div className="flex flex-col">
        <form>
          <InputField
            type="text"
            label="Your Full Name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
            error={errors.name}
          />
          <InputField
            type="email"
            label="Your Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: emailRegEx,
                message: "Please enter valid email",
              },
            })}
            error={errors.email}
          />
        </form>
      </div>

      <div className="flex flex-row justify-between mt-4">
        <OutlineButton
          onClick={() => {
            send("GO_BACK_RESUME");
          }}
        >
          Go Back
        </OutlineButton>
        <Button onClick={onSubmit} disabled={!isValid}>
          Finish
        </Button>
      </div>
    </>
  );
};

export default CheckoutCart;
