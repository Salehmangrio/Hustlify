import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";

import { Link } from "react-router-dom";
import * as Yup from "yup";
import { animateFromTo } from "../../utils/animation";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [sent,setSent]=useState(false);

  useGSAP(() => {
    animateFromTo('#forget-form')
  }, []);

  const initialValues = { email: "" };

  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Reset link sent to:", values.email);
      setLoading(false);
      setSent(true)
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-10vh)] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000] px-4 md:py-8">
      <div id="forget-form" className="w-full max-w-md">
        <div className="rounded-2xl shadow-2xl bg-[#0f172a] text-white mt-4">
          <div className="p-8">
            <h2 className="md:text-3xl text-lg font-bold text-center mb-6 text-white">
              Forgot Your Password?
            </h2>
            <p className="text-sm text-center text-gray-400 mb-6">
              Enter your email and we'll send you a link to reset your password.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="space-y-5">
                  <div>
                    <label className="text-sm mb-1 block">Email</label>
                    <div className="relative">
                      <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
                      <Field
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        className="pl-10 w-full py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-2 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                  >
                    {loading ? "Sending..." :((sent)?"Sent": "Send Reset Link")}
                  </button>

                  <p className="text-sm text-center text-gray-400 mt-6">
                    Remember your password?{" "}
                    <Link to={`/login`} className="text-indigo-400 hover:underline">
                      Login
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
