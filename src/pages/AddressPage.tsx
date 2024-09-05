import { useEffect, useState } from 'react';
import { getTransactionList, Transaction } from '../services/explorer.ts';
import Header from '../components/Header.tsx';
import InteractionsCard from '../components/InteractionsCard.tsx';
import VolumeCard from '../components/VolumeCard.tsx';
import FeeCard from '../components/FeeCard.tsx';
import ActivityCard from '../components/ActivityCard.tsx';
import Last10Transactions from '../components/Last10Transactions.tsx';
import TotalVolume from '../components/TotalVolume.tsx'; // Import the new component

const AddressPage = () => {
  const address = window.location.search.split('=')[1];
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!address || address.length !== 42 || address.slice(0, 2) !== '0x') {
      window.location.search = '';
      return;
    }
    fetchTransactionList();
  }, [address]);

  const fetchTransactionList = async () => {
    const transactions: Transaction[] = await getTransactionList(address);
    setTransactionList(transactions);
  };

  return (
    <>
      <Header hasSearchBar />
      <div className="grid mt-20 place-items-center">
        <div className="grid place-items-center">
          <div className="flex items-center flex-row space-x-5 mt-5">
            <InteractionsCard address={address} />
            <TotalVolume transactions={transactionList} /> {/* Moved Eth balance block here */}
            <FeeCard address={address} transactions={transactionList} />
          </div>
          <div className="flex items-center flex-row space-x-5 mt-1.5">
            <VolumeCard address={address} /> {/* Moved Eth balance block here */}
            <ActivityCard transactions={transactionList} />
          </div>
          <Last10Transactions transactions={transactionList} />
        </div>
      </div>
    </>
  );
};

export default AddressPage;



