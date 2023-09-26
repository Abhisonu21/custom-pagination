import React from 'react'

const SkipBox = ({inputValue, setCurrentPage, lastPage}) => {
    const onChangeValue = (e) =>{
        const inpValue = Number(e.target.value);
        if(inpValue > 0 && inpValue <= lastPage){
            setCurrentPage(inpValue)
        } else{
            setCurrentPage(lastPage)
        }
    }
  return (
    <div className='skip-box'>
    {
        <input type="number" name="skipNumber" className='inputBox' value={inputValue} onChange={onChangeValue} data-testid = "skipBox" />
    }
      
    </div>
  )
}

export default SkipBox
