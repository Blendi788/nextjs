import { div } from "framer-motion/dist/m";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Props {
    children?: ReactNode;
    name?: string;
}

export function MainLayout(props: Props) {
    return (
        <div className="min-h-screen flex flex-col">
        <Head>
        <title>{props.name}</title>
        </Head>
        <Header />
        <main className="flex-grow bg-gray-50 pt-16">{props.children}</main>
        <Footer />
        </div>
    );
}

export default MainLayout;