import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short!").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function Login() {
  const [loading, setLoading] = useState(false);
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
    <div className="min-h-[calc(100vh-10vh)] flex items-center justify-center bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000] px-4">
      <div ref={formRef} className="w-full max-w-md">
        <div className="rounded-2xl shadow-2xl bg-[#0f172a] border-none text-white">
          <div className="p-8">
            <h2 className="md:text-3xl text-lg font-bold text-center mb-6 text-white">Welcome Back to Hustlify</h2>
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                setLoading(true);
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setLoading(false);
                }, 1500);
              }}
            >
              {({ errors, touched }) => (
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
                      <a href="#" className="text-sm text-indigo-400 hover:underline">Forgot Password?</a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-2 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>

                  <div className="flex flex-col gap-3 mt-4">
                    <button className="flex items-center gap-2 justify-center text-white border border-gray-600 py-2 rounded-lg hover:text-indigo-400 transition">
                      <FcGoogle size={20} /> Continue with Google
                    </button>
                    <button className="flex items-center gap-2 justify-center text-white border border-gray-600 py-2 rounded-lg hover:text-indigo-400 transition">
                      <FaGithub size={20} /> Continue with GitHub
                    </button>
                    <button className="flex items-center gap-2 justify-center text-white border border-gray-600 py-2 rounded-lg hover:text-indigo-400 transition">
                      <FaLinkedin size={20} /> Continue with LinkedIn
                    </button>
                  </div>

                  <p className="text-sm text-center text-gray-400 mt-6">
                    Don't have an account? <a href="#" className="text-indigo-400 hover:underline">Create New Account</a>
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
