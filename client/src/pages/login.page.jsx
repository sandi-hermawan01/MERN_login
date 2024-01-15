import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", { email, password });
      if (data.error) {
        toast({
          variant: "destructive",
          description: data.error,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="flex justify-center items-center text-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription className="pt-2">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="py-4 " onSubmit={loginUser}>
            <div className="grid w-full items-center gap-4 pb-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-start ml-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail123@gmail.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-start ml-1">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="******"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </div>
            <Button type="submit">Sign In</Button>
          </form>

          <CardDescription>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="hover:underline text-black text-[16px]"
            >
              sign up
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignIn;
