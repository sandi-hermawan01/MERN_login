import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";

import axios from "axios";

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", { name, email, password });
      if (data.error) {
        toast({
          variant: "destructive",
          description: data.error,
        });
      } else {
        setData({});
        toast({
          variant: "success",
          description: "Sign up Successful. Welcome!",
        });
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex justify-center items-center text-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription className="pt-2">
            Create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={registerUser} className="py-4">
            <div className="grid w-full items-center gap-4 pb-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullname" className="text-start ml-1">
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="your name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <Label htmlFor="email" className="text-start ml-1 pt-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail123@gmail.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <Label htmlFor="password" className="text-start ml-1 pt-2">
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
            <Button type="submit">Sign Up</Button>
          </form>
          <CardDescription>
            Already have an account?{" "}
            <a
              href="/signin"
              className="hover:underline text-black text-[16px]"
            >
              sign in
            </a>
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignUp;
