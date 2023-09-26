export const initalDot = '...';
export function paginationRange (currentPage, lastPage, maxNumber){
    const res = [];
   
    for (let i = 1; i <= lastPage; i++) {
        res.push(i);
    }
    let totalPageNo = [...res];
    if(res.length < 6){
        totalPageNo = res;
    } else {
        if(currentPage >=1 && currentPage <=3){
            const slicePage = res.slice(0, 4);
            const slicePage1 = res.slice(res.length-3);
            totalPageNo = [...slicePage, initalDot, ...slicePage1]
        } else if(currentPage === 4 && res.length > 7){
            const slicePage = res.slice(0, 5);
            const slicePage1 = res.slice(res.length-3);
            totalPageNo = ([...slicePage, initalDot, ...slicePage1])
        } else if(currentPage >= 4 && res.length <=7){
            const slicePage = res.slice(0, 6);
            totalPageNo = ([...slicePage, res.length])
        } else if(currentPage === 5 && res.length <=10){
            const slicePage1 = res.slice(0, 6);
            const slicePages2 = res.slice(res.length - 3);
            totalPageNo = ([...slicePage1, initalDot,  ...slicePages2 ])
        } else if(currentPage >= 6 && res.length <=10){
            const slicePage1 = res.slice(0, 3);
            const slicePages2 = res.slice(res.length - 6);
            totalPageNo = ([...slicePage1, initalDot,  ...slicePages2 ])
        } else if(currentPage > 4 && currentPage < res.length - 3){
            const slicePages1 = res.slice(currentPage - 2, currentPage);
            const slicePages2 = res.slice(currentPage, currentPage+1);
            const slicePages3 = res.slice(res.length - 3);
            console.log(slicePages2);
            totalPageNo = ([1,2,3, initalDot, ...slicePages1, ...slicePages2,  initalDot, ...slicePages3])
        } else if(currentPage === res.length - 3){
            const slicePages3 = res.slice(res.length - 5);
            totalPageNo = ([1, 2, 3, initalDot, ...slicePages3])
        } else if(currentPage > res.length - 3){
            const slicePages3 = res.slice(res.length - 4);
            totalPageNo = ([1, 2, 3, initalDot, ...slicePages3])
        } 
    }
    
    return totalPageNo;
}
