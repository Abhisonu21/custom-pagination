import { fireEvent, getByLabelText, getByTestId, queryByLabelText, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Pagination from "../components/pagination";
import '@testing-library/jest-dom';
import SkipBox from "../components/skipBox";
import SelectPage from "../components/selectPage";

describe('<Pagination />', () =>{
    const renderComponent = ({currentPage, setCurrentPage, lastPage}) => render(<Pagination currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage} />)
    it("On PaginationList component is render", () => {
        render(<Pagination/>)
    });

    it("Should render Nav elements", () =>{
        renderComponent({
            currentPage: 1,
            lastPage: 5,
        })
        const divElement = screen.queryByLabelText('Pagination');
        expect(divElement?.tagName).toBe('NAV');
        
    })
    it("Should render all the page number if current page is 3 and last page is 3", () =>{
        renderComponent({
            currentPage: 1,
            lastPage: 3,
        })
        const divElement = screen.queryByLabelText('Pagination');
        const navChildTextContent = [ 'First', '<', '1', '2', '3', '>', 'Last'  ]
        navChildTextContent.forEach((textContent, id) => {
            expect(divElement?.childNodes[id]).toHaveTextContent(textContent);
        })
    })
    it("Should render all the page number if current page is 1 and last page is 5", () =>{
        renderComponent({
            currentPage: 1,
            lastPage: 5,
        })
        const divElement = screen.queryByLabelText('Pagination');
        const navChildTextContent = [ 'First', '<', '1', '2', '3', '4', '5', '>', 'Last'  ]
        navChildTextContent.forEach((textContent, id) => {
            expect(divElement?.childNodes[id]).toHaveTextContent(textContent);
        })
    })
    it("Should render all the page number if current page is 5 and last page is 7", () =>{
        renderComponent({
            currentPage: 4,
            lastPage: 7,
        })
        const divElement = screen.queryByLabelText('Pagination');
        const navChildTextContent = [ 'First', '<', '1', '2', '3', '4', '5', '6', '7', '>', 'Last'  ]
        navChildTextContent.forEach((textContent, id) => {
            expect(divElement?.childNodes[id]).toHaveTextContent(textContent);
        })
    })
    it("Should render all the page number if with dots if current page is 5 and last page is 10", () =>{
        renderComponent({
            currentPage: 5,
            lastPage: 10,
        })
        const divElement = screen.queryByLabelText('Pagination');
        const navChildTextContent = [ 'First', '<', '1', '2', '3', '4', '5', '6', '...', '8', '9', '10', '>', 'Last'  ]
        navChildTextContent.forEach((textContent, id) => {
            expect(divElement?.childNodes[id]).toHaveTextContent(textContent);
        })
    })
    it("Should render all the page number if with dots if current page is 6 and last page is 10", () =>{
        renderComponent({
            currentPage: 6,
            lastPage: 10,
        })
        const divElement = screen.queryByLabelText('Pagination');
        const navChildTextContent = [ 'First', '<', '1', '2', '3', '...', '5', '6', '7', '8', '9', '10', '>', 'Last'  ]
        navChildTextContent.forEach((textContent, id) => {
            expect(divElement?.childNodes[id]).toHaveTextContent(textContent);
        })
    })
    it("Should render all the page number if with dots if current page is 6 and last page is 10", () =>{
        renderComponent({
            currentPage:6,
            lastPage: 11,
        })
        const divElement = screen.queryByLabelText('Pagination');
        const navChildTextContent = [ 'First', '<', '1', '2', '3', '...', '5', '6', '7', '...', '9', '10', '11', '>', 'Last'  ]
        navChildTextContent.forEach((textContent, id) => {
            expect(divElement?.childNodes[id]).toHaveTextContent(textContent);
        })
    });
    it("Should Handled PageButton Click", () =>{
        const setFunctionMockUp = vi.fn();
        const currentPage = 1;
        const lastPage = 10;
        renderComponent({
            currentPage,
            lastPage,
            setCurrentPage: setFunctionMockUp,
        })
        expect(setFunctionMockUp).not.toBeCalled();
        const PreviousClick = screen.queryByText('<');
        fireEvent.click(PreviousClick);

        expect(setFunctionMockUp).toBeCalledTimes(1);
        expect(setFunctionMockUp).toBeCalledWith(currentPage - 1);

        setFunctionMockUp.mockClear();

        const NextClick = screen.queryByText('>');
        fireEvent.click(NextClick);
        expect(setFunctionMockUp).toBeCalledTimes(1);
        expect(setFunctionMockUp).toBeCalledWith(currentPage + 1);
        
        setFunctionMockUp.mockClear();

        const FirstClick = screen.queryByText('First');
        fireEvent.click(FirstClick);
        expect(setFunctionMockUp).toBeCalledTimes(1);
        expect(setFunctionMockUp).toBeCalledWith(1);
        
        setFunctionMockUp.mockClear();

        const LastClick = screen.queryByText('Last');
        fireEvent.click(LastClick);
        expect(setFunctionMockUp).toBeCalledTimes(1);
        expect(setFunctionMockUp).toBeCalledWith(lastPage);
        
    });

    it("Child Component is rendered properly", () => {
        const {getByTestId} = render(<SkipBox />);
        expect(getByTestId('skipBox')).toBeInTheDocument();        
    })

    it("Child Select Box Component is rendered properly", () => {
        const {getByTestId} = render(<SelectPage />);
        expect(getByTestId('pageSize')).toBeInTheDocument();        
    })
})


