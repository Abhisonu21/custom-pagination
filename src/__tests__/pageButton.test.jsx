import { describe, expect, it } from "vitest";
import PageButton from "../components/pageButton";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
describe('Pagination Button', () =>{
    const renderComponent = ({children, className}) => render(<PageButton className= {className} >{children}</PageButton>);
    it("On PaginationList component is render", () => {
        render(<PageButton />)
    });
    it("Should render span element by Default", () => {
        const text = 'span';
        
        renderComponent({
            children: text
        })
        const el = screen.queryByText(text);

        expect(el?.tagName).toBe('SPAN');
    });
    it("Should accept the className as props", () => {
        const className = "page";
        const text = 'span';
        renderComponent({
            className,
            children: text,
        })
        const el = screen.queryByText(text);

        expect(el).toHaveClass(className);
        expect(el).toHaveAttribute('aria-current', 'page');
    }) 
    
});
