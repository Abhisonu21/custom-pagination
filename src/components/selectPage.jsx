import React, {useMemo} from 'react'

const selectPage = ({fixPages, pageSize, selectChange}) => {
  return (
    <>
      <select className='selectBox' value={pageSize} onChange={selectChange} data-testid="pageSize">
        {
            fixPages?.map((ele, index) => {
                return <option value={ele} key={index}>{ele}</option>
            })
        }
      </select>
    </>
  )
}

export default selectPage
