import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../utils/validators";
import { LoginWith } from "../../components";
import { handleLoginSubmit } from "../../utils/users";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const formRef = useRef(null);

  useGSAP(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-8vh)] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000] px-4 md:py-8">
      <div ref={formRef} className="w-full max-w-md">
        <div className="rounded-2xl shadow-2xl bg-[#0f172a] border-none text-white mt-4">
          <div className="p-8">
            <h2 className="md:text-3xl text-lg font-bold text-center mb-6 text-white">Welcome Back to Hustlify</h2>
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => handleLoginSubmit(values, setLoading,navigate)}
            >
              {() => (
                <Form className="space-y-5">
                  <div>
                    <label className="text-sm mb-1 block">Username</label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
                      <Field
                        name="username"
                        type="text"
                        placeholder="your_username"
                        className="pl-10 w-full py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-1 block">Password</label>
                    <div className="relative">
                      <Lock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
                      <Field
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 w-full py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <div className="text-right mt-1">
                      <Link  to={`/forget`}  className="text-sm text-indigo-400 hover:underline">Forgot Password?</Link>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-2 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  <p className="text-center text-gray-100">or</p>
                  <div className="flex flex-col gap-3 mt-1">
                    <LoginWith Icon={FcGoogle} title={`Continue with Google`} />
                    <LoginWith Icon={FaGithub} title={`Continue with GitHub`} />
                    <LoginWith Icon={FaLinkedin} title={`Continue with LinkedIn`} />
                  </div>

                  <p className="text-sm text-center text-gray-400 mt-6">
                    Don't have an account? <Link to={"/register"} className="text-indigo-400 hover:underline">Create New Account</Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div >
  );
}
