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
                        </div>sdsd

                        <ul className="flex item-center ml-auto space-x-4">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</Link>
                            </li>

                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</Link>
                            </li>

                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</Link>
                            </li>

                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /header */}

                {/* banner */}
                <div className="bg-bannerImg h-bannerImg">
                    <div className="container mx-auto px-4 h-full flex items-center justify-center">
                        <div>
                            <div className="text-center">
                                <h1 className="text-gray-200 text-3xl mb-1">Onde você quer ir?</h1>
                                <p className="text-green-100">Escolha o estado e cidade para achar os melhores resorts.</p>
                            </div>

                        <div className="mt-7">
                            <form>
                                <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                    <option value="">Escolha estado</option>
                                </select>

                                <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                    <option value="">Escolha cidade</option>
                                </select>

                                <button className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded ml-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>

                                    Pesquisar resorts
                                </button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                {/* /banner */}
            </div>
        </>
    )
}