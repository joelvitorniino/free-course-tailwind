import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>

            <div className="bg-gray-50 text-gray-600">
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
                                <select className="bg-gray-50 px-3 py-2 mr-3 border border-gray-300 rounded text-gray-500">
                                    <option value="">Escolha estado</option>
                                </select>

                                <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                    <option value="">Escolha cidade</option>
                                </select>

                                <button className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded ml-3">
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

                {/* featured resort */}
                <div>
                    <div className="container mx-auto px-4 py-10">
                        <div className="flex">
                            <div>
                                <div className="text-sm text-gray-400 font-medium">RESORT EM DESTAQUE</div>
                                <div className="text-2xl">Ecoresort Praia do Forte Bahia</div>
                                <div className="text-sm text-gray-400 font-medium mt-2">Hotel qualidade 5 estrelas</div>
                                <div className="text-sm text-gray-400 font-medium mt-4">
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectur</p>
                                    <p>Lorem ipsum dolor sit amet, consectur</p>
                                </div>

                                <div className="mt-4">
                                <Link href="#" className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded ml-3">
                                    Solicitar reserva
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </Link>
                                </div>
                            </div>

                            <div className="flex-shrink-0 ml-auto">
                                <Image src="/img/featured-img.png" width={450} height={0} alt="resort"></Image>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /featured resort */}
            </div>
        </>
    )
}