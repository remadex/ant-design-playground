import { Rule } from "antd/es/form";

export default {
  email: [
    {
      required: true,
      message: "L'email est requis"
    },
    {
      type: 'email',
      message: "L'email n'est pas correct"
    }
  ] as Rule[],
  password: [
    {
      required: true,
      message: "Le mot de passe est requis"
    }
  ] as Rule[]
}