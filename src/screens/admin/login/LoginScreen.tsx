import React from "react";
import LoginFormComponent from "./components/LoginFormComponent";

const LoginScreen = () => {
    return (
        <section className="border border-zinc-300 p-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[360px] w-[80%] ">
        <h1 className="text-xl mb-4">Login to Blownmind IO</h1>
        <LoginFormComponent />
        </section>
    );
};

export default LoginScreen;
