export const initalDot = '...';
export function paginationRange (currentPage, lastPage, maxNumber){
    const res = [];
    /* let initalDot = '...';
    let initalDotLeft = '... ';
    let initalDotRight = ' ...'; */
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
    /* if(lastPage <= maxNumber){
        for (let i = 1; i <= lastPage; i++) {
            res.push(i);
        }
    }
    else{
        const firstPage = 1;
        const totalPageCount = 3;
        const remainMaxNumber = maxNumber - totalPageCount;
        const sideLength = remainMaxNumber / 2;
        if(currentPage - firstPage <= sideLength || lastPage - currentPage < sideLength){
            for (let j = firstPage; j <= firstPage+sideLength; j++) {
                res.push(j);
            }
            res.push('...');
            for (let k = lastPage - sideLength; k <= lastPage; k++) {
                res.push(k);
            }
        } else if(currentPage - firstPage >= remainMaxNumber && lastPage - currentPage >= remainMaxNumber ){
            const removeSideLength = sideLength - 1;
            res.push(firstPage);
            res.push('...');
            for (let l = currentPage - removeSideLength; l <= currentPage + removeSideLength; l++) {
                res.push(l);
                res.push('...');
                res.push(lastPage);
                
            }
        }
    } */
    return totalPageNo;
}

/* console.log(paginationRange(1, 5, 11));
console.log(paginationRange(1, 7, 11));
console.log(paginationRange(1, 10, 11));
console.log(paginationRange(9, 10, 11));
console.log(paginationRange(5, 10, 11));
console.log(paginationRange(6, 10, 11)); */