import { useEffect, useState } from "react";
import Head from "next/head";

function WithLoading(WrappedComponent, fetchData) {
  return () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };

    const Loading = (
      <>
        <Head>
          <title>Loading....</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="bg-black flex items-center justify-center h-screen">
          <img className="absolute top-44" src="./logo-guntaro.png" alt="logo" />
          <div class="w-16 h-16 border-b-2 border-white rounded-full animate-spin animate-pulse" />
        </div>
      </>
    );
    return data ? <WrappedComponent /> : Loading;
  };
}

export default WithLoading;
