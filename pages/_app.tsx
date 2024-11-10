import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { AppProps } from 'next/app'
import "@/styles/globals.css";
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
         <div className="flex flex-col h-screen justify-between">
            <Header />      
            <Component {...pageProps} className="mb-auto h-10 bg-green-500  flex-grow"/>       
            <Footer />
            </div>  
        </>
    )


}