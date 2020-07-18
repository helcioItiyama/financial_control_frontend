import React, { useState, useEffect, useMemo, useRef} from 'react';
import Select from '../components/Select';
import Details from '../components/Details';
import Table from '../components/Table';
import Loading from '../components/Loading';
import Input from '../components/Input';
import Modal from '../components/Modal';
import api from '../services/api';
import { formatPrice, formatDate , actualMonth, formatNumber } from '../utils/format';
import { Container, Message } from './styles';

export default function App() {
  const inputRef = useRef();
  
  const today = useMemo(() => {
    return actualMonth()
  }, []
  )
  const [date, setDate] = useState(today);
  const [transactions, setTransactions] = useState([]);
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [years, setYears] = useState([]);
  const [filter, setFilter] = useState('')
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function uploadDates() {
      const { data } = await api.get("/api/transaction/years");
      const formatdata = data.map(year => ({date: year, formatDate: formatDate(year)}))
      setYears(formatdata);
    }
    uploadDates();
  }, [])

  useEffect(() => {
    async function loadTransactions() {
      const { data } = await api.get("/api/transaction", {
        params: {period: `${date}`}
      });

      const formatData = data.findTransactions.map(transaction => {
        return {
          ...transaction,
          value: formatPrice(transaction.value),
          day: formatNumber(transaction.day),
          month: formatNumber(transaction.month),
        }
      });

      const details = {
        income: formatPrice(data.income),
        outcome: formatPrice(data.outcome),
        balance: data.balance,
        transactionNumber: data.transactionNumber,
        formattedBalance: formatPrice(data.balance)
      }

      setTransactions(formatData);
      setTransactionDetails(details);
      setIsLoading(false);
      inputRef.current.focus();
    }
    loadTransactions();
  }, [date]);

  const handleSelect = (event) => {
    setIsLoading(true);
    setDate(event.target.value);
  };

  const buttonToggle = (buttonType) => {
    setIsLoading(true)
    const index = years.findIndex(year => year.date === date);

    if(buttonType === 'next') {
      const nextIndex = years[index + 1]?.date;
      if(!nextIndex) {
        return;
      }
      setDate(nextIndex);
    } else if (buttonType === 'back') {
      const nextIndex = years[index - 1]?.date;
      if(!nextIndex) {
        return;
      }
      setDate(nextIndex)
    }
  };

  const handleFilter = (event) => {
    const words = event.target.value;
    setFilter(event.target.value);
    const filteredWords = transactions.filter(transaction => 
      transaction.description.toLowerCase().includes(words.toLowerCase()));
    setFilteredTransactions(filteredWords);
  };

  const handleAddTransaction = () => {

  };

  return (
    <Container>
      <Select 
        onHandleChange={handleSelect} 
        onButtonToggle={buttonToggle}
        currentDate={date}
        years={years}
      />
     
      <Details transactionDetails={transactionDetails}/>

      <Input 
        onRef={inputRef}
        handleFilter={handleFilter}
        filter={filter}
        handleAddTransaction={handleAddTransaction}
      />

      {isLoading ? (
        <Loading />
        ) : (
          filter
          ? filteredTransactions.length === 0 
            ? (
                <Message>Busca não encontrada 
                  <span role="img" aria-label="sad face">😢</span>
                </Message>
              ) : (
                <Table transactions={filteredTransactions}/>
              )
          :(
            <Table transactions={transactions}/>
          )
        )
      }
      <Modal/>
    </Container>
  );
}
