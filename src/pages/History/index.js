import {useEffect, useState} from 'react';
import historyData from '../../services/history';
import {HistoryList} from '../../components';
import { ContainerStyled,
         H1Styled} from './History.style';

const History = () => {
  const [history, setHistory] = useState({
      status: 'pending...',
      data: [],
    });
    
  useEffect(() => {
      const getAllHistory = async () => {
        const dataHistory = await historyData();
        if (dataHistory) {
          setHistory({
            status: 'success!',
            data: dataHistory,
          })
        } else {
          setHistory({
            status: 'error!',
            data: [],
          })
        }
      }
      getAllHistory();
    }, []);

    const productsList = history.data?.map((product,index) => {
      return (
        <HistoryList
          key={index}
          productId={product?._id}
          name={product?.name}
          category={product?.category}
          alt={product?.name}
          photo={product?.img?.url}
          cost={product?.cost}
        />
      );
    });

  return (
    <>
      <H1Styled>Historial de los canjes</H1Styled>
      <ContainerStyled>
      {
        history?.status === 'pending...' && !history?.data  ? <span>Loading...</span> : (
          history?.status === 'error!' && !history?.data ? <span>Result not found</span> : (
            history?.status === 'success!' && history?.data ? productsList : null
          )
        )
      } 
      </ContainerStyled>
    </>
  )
}

export default History;
