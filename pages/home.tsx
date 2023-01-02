import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>

            <div className="bg-gray-50">
                {/* header */}
                <div>
                    <div className="container mx-auto px-4 h-24 flex items-center">
                        <div className="font-black">
                            LOGO
                        </div>

                        <ul className="ml-auto">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</Link>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</Link>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</Link>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /header */}
            </div>
        </>
    )
}