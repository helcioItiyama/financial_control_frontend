import React, { useState, useEffect, useMemo, useRef} from 'react';
import { toast } from 'react-toastify';
import Select from '../components/Select';
import Details from '../components/Details';
import Table from '../components/Table';
import Loading from '../components/Loading';
import Input from '../components/Input';
import Modal from '../components/Modal';
import api from '../services/api';
import { useOnClickOutside } from '../utils/hooks';
import { formatPrice, formatLetter, formatDate , actualMonth, formatNumber } from '../utils/format';
import { Container, Message } from './styles';

export default function App() {
  const modalRef = useRef()
  
  const today = useMemo(() => {
    return actualMonth().thisDate;
  }, []
  )
  const [date, setDate] = useState(today);
  const [transactions, setTransactions] = useState([]);
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [years, setYears] = useState([]);
  const [filter, setFilter] = useState('')
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [editTransaction, setEditTransaction] = useState({})

  useEffect(() => {
    async function uploadDates() {
      try {
        const { data } = await api.get("/api/transaction/years");
        const formatdata = data.map(year => ({date: year, formatDate: formatDate(year)}))
        setYears(formatdata);
      } catch(err) {
        toast.error("Não foi possível carregar os dados")
      }
    }
    uploadDates();
  }, [])

  async function loadTransactions() {
    try {
      const { data } = await api.get("/api/transaction", {
        params: {period: `${date}`}
      });
      
      const formatData = data.findTransactions.map(transaction => {
        return {
            ...transaction,
            formatValue: formatPrice(transaction.value),
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
    } catch(err) {
      toast.error("Não foi possível carregar conteúdo")
    }
  } 

  useEffect(() => {
    loadTransactions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const handleSelect = (event) => {
    setIsLoading(true);
    setDate(event.target.value);
  };

  const buttonToggle = (buttonType) => {
    setIsLoading(true)
    const index = years.findIndex(year => year.date === date);

    if(buttonType === 'back') {
      const nextIndex = years[index + 1]?.date;
      if(!nextIndex) {
        return;
      }
      setDate(nextIndex);
    } else if (buttonType === 'next') {
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
      formatLetter(transaction.description).includes(formatLetter(words)));
    setFilteredTransactions(filteredWords);
  };

  const handleOpen = () => {
    setIsModal(true);
    setEditTransaction({})
  };

  const handleClose = () => {
    setIsModal(false);
  }

  const handleModal = (id) => {
    const findTransaction = transactions.find(transaction => 
      transaction._id === id
    );
    setEditTransaction(findTransaction);
  }

  useOnClickOutside(modalRef, () => isModal && setIsModal(false));

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
        handleFilter={handleFilter}
        filter={filter}
        handleAddTransaction={handleOpen}
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
                <Table 
                  transactions={filteredTransactions} 
                  loadTransactions={loadTransactions}
                  handleOpen={handleOpen}
                  handleModal={handleModal}
                />
              )
          :(
            <Table 
              transactions={transactions}
              loadTransactions={loadTransactions}
              handleOpen={handleOpen}
              handleModal={handleModal}
            />
          )
        )
      }

      {isModal && (
        <Modal 
          onRef={modalRef}
          handleClose={handleClose} 
          edit={editTransaction}
          loadTransactions={loadTransactions}  
        />
      )}
    </Container>
  );
}
