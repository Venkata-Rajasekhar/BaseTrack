import HomePage from './pages/HomePage.tsx';
import AddressPage from './pages/AddressPage.tsx';
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultConfig,RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {mainnet,polygon,optimism,arbitrum,base} from 'wagmi/chains';
import {QueryClientProvider,QueryClient,} from "@tanstack/react-query";
const config = getDefaultConfig({
  appName: 'MART',
  projectId: '5f06164d03e39235183d93d0e07b9405',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

const queryClient = new QueryClient();
const App = () => {
  return (
        <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <main className="absolute top-0 left-0 w-full min-h-full bg-gray-100 dark:bg-gray-900">
            {!window.location.search.includes('?address=') ? <HomePage /> : <AddressPage />}
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import '@rainbow-me/rainbowkit/styles.css';
// import { RainbowKitProvider,  midnightTheme } from '@rainbow-me/rainbowkit';
// import { Chain, getDefaultWallets } from '@rainbow-me/rainbowkit';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { publicProvider } from 'wagmi/providers/public';
// import { mainnet, polygon, optimism, arbitrum, base, zora} from 'wagmi/chains';
// import HomePage from './pages/HomePage.tsx';
// import AddressPage from './pages/AddressPage.tsx';
// const defichain: Chain = {
//   id: 1130,
//   name: 'DeFiChain DMC',
//   network: 'DeFiChain mainnet',
//   iconUrl: 'https://cryptologos.cc/logos/defichain-dfi-logo.svg?v=029',
//   iconBackground: '#fff',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'DeFiChain mainnet',
//     symbol: 'DFI',
//   },
//   rpcUrls: {
//     public: { http: ['https://dmc.mydefichain.com/mainnet'] },
//     default: { http: ['https://dmc.mydefichain.com/mainnet'] },
//   },
//   blockExplorers: {
//     default: { name: 'DefiChain', url: 'https://mainnet-dmc.mydefichain.com:8441' },
//     etherscan: { name: 'DefiChain', url: 'https://mainnet-dmc.mydefichain.com:8441' },
//   },
//   testnet: false,
// };
// const { chains, publicClient } = configureChains(
//   [defichain, mainnet,polygon, optimism, arbitrum, base, zora],
//   [publicProvider()],
// );

// const { connectors } = getDefaultWallets({
//   appName: 'MART',
//   projectId: '5f06164d03e39235183d93d0e07b9405',
//   chains,
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });
// const App = () => {
//   return (
//     <WagmiConfig config={wagmiConfig}>
//     <RainbowKitProvider
//       chains={chains}
//       theme={midnightTheme({
//         accentColor: '#00FFFFFF',
//         accentColorForeground: 'white',
//         borderRadius: 'large',
//       })}
//     >
//       <Router>
//         <main className="absolute top-0 left-0 w-full">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/dashboard" element = {<AddressPage />} />
//           </Routes>
//         </main>
//       </Router>
//     </RainbowKitProvider>
//   </WagmiConfig>
//   );
// };

// export default App;
