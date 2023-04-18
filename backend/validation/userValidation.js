const yup=require("yup")
const userSchema =yup.object().shape({
    fullName: yup.string().required("please insert your full name!"),
    email: yup.string().email().required("please insert your email!"),
    password: yup
      .string()
      .min(3)
      .max(20)
      .required("please insert password please"),
   
  });


module.export =userSchema