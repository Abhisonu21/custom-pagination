import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import SkipBox from "../components/skipBox";

describe("Skip Box is working properly", () =>{
    const renderComponent = ({inputValue, setCurrentPage, lastPage}) => render(<SkipBox inputValue={inputValue} setCurrentPage={setCurrentPage} lastPage={lastPage} />);
    it("On Skip Box component is render", () => {
        render(<SkipBox/>)
    });
    it("Should render div elements", () =>{
        renderComponent({
            lastPage: 5,
        })
        const divElement = screen.getByTestId('skipBox');
        expect(divElement?.tagName).toBe('INPUT');
        
    })
    it("Check Input Box value changing on Change event", () => {
        const lastPage = 10;
        const changedValue = '4';
        renderComponent({
            lastPage,
            setCurrentPage: vi.fn(),
        })
        const inputNode = screen.getByTestId('skipBox');
        expect(inputNode.value).toBe('');
        fireEvent.change(inputNode, { target: { value: changedValue } });
        expect(inputNode.value).toBe(changedValue);
    })
})
