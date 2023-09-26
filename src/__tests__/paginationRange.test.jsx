import React from 'react';
import { describe, it, any, expect } from 'vitest';
import { render } from "@testing-library/react";
import Pagination from '../components/pagination';
import { paginationRange } from "../util/appUtil";

describe('Pagination', () =>{
    
    it("On Pagination component is render", () => {
        render(<Pagination />)
    });
});

describe('pagination excution', () => {
    describe('paginationRange()', () => {
        it('Should handle Least Page Number', () => {
            expect(paginationRange(1, 5)).toEqual([1, 2, 3, 4, 5])
            expect(paginationRange(5, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
        });
        it('Should handle middle ellipsis', () => {
            expect(paginationRange(5, 10)).toEqual([1, 2, 3, 4, 5, 6, '...', 8, 9, 10])
            expect(paginationRange(6, 10)).toEqual([1, 2, 3, '...', 5, 6, 7, 8, 9, 10])
        })
    	it('Should handle two ellipsis', () => {
            expect(paginationRange(6, 11)).toEqual([1, 2, 3, '...', 5, 6, 7, '...', 9, 10, 11])
        })
    })
});