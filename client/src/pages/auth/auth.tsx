import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
}

interface AuthError {
  field: keyof FormData;
  message: string;
}

const AuthPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Card className="relative w-full max-w-md overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm dark:bg-gray-800/90">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/10" />

        <CardHeader className="relative space-y-1 pb-0">
          <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">
            {isSignIn ? "Welcome Back" : "Create Account"}
          </CardTitle>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {isSignIn
              ? "Sign in to access your account"
              : "Sign up to get started"}
          </p>
        </CardHeader>

        <CardContent className="relative mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignIn ? "signin" : "signup"}
              initial={{ x: isSignIn ? -300 : 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isSignIn ? 300 : -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isSignIn && (
                  <div className="space-y-2">
                    <Label className="text-gray-700 dark:text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      name="fullName"
                      placeholder="John Doe"
                      className="border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {!isSignIn && (
                  <div className="space-y-2">
                    <Label className="text-gray-700 dark:text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      className="border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <Input
                    name="password"
                    type="password"
                    className="border-2 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors duration-300"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>
                        {isSignIn ? "Signing in..." : "Creating account..."}
                      </span>
                    </div>
                  ) : isSignIn ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t dark:border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-500 dark:border-gray-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-colors duration-300"
                  >
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-500 dark:border-gray-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-colors duration-300"
                  >
                    Facebook
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                {isSignIn
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium transition-colors duration-300"
                >
                  {isSignIn ? "Sign up" : "Sign in"}
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
