import React, {useCallback} from 'react'
import PageButton from './pageButton';
import SelectPage from './selectPage';
import SkipBox from './skipBox';
import { paginationRange, initalDot } from '../util/appUtil';

const Pagination = ({currentPage, setCurrentPage, lastPage, fixPages, skip, pageSize, setPageSize}) => {
    let pageNum = paginationRange(currentPage, lastPage);
    const buttonClick = (type) => {
        if(type === 'prev'){
            console.log("Prev trigger")
            setCurrentPage(currentPage-1)
        } else if(type === 'next'){
            console.log("Next trigger")
            setCurrentPage(currentPage+1)
        }
    }
    const selectChange = useCallback((e) =>{
        setPageSize(e.target.value)
        if(currentPage.length !== lastPage){
            setCurrentPage(1)
        }
    }, [pageSize])
    

  return (
    <nav className='main-pagination' aria-label='Pagination'>
        <PageButton children={'First'} className={currentPage === 1 ? 'disable' : ''} onClick={() => setCurrentPage(1)} />
        <PageButton children={'<'} className={currentPage === 1 ? 'disable' : ''} onClick={() => buttonClick('prev')} />
        {
            pageNum && (
                <>
                    {
                        pageNum.map((ele, index)=>{
                            return <PageButton key={index} children={ele} className={ele === currentPage ? 'active' : (ele === initalDot ? 'pointer-event-none' : '')} onClick={() => setCurrentPage(ele)} />
                        })
                    }
                </>
            )
        }
        <PageButton children={'>'} className={currentPage === lastPage ? 'disable' : ''} onClick={() => buttonClick('next')} />
        <PageButton children={'Last'} className={currentPage === lastPage ? 'disable' : ''} onClick={() => setCurrentPage(lastPage)} />

        {
            fixPages && (
                <SelectPage fixPages={fixPages} selectChange={selectChange} />
            )
        }

        {
            skip && (
                <SkipBox setCurrentPage={setCurrentPage} lastPage={lastPage} />
            )
        }
    </nav>
  )
}

export default Pagination
