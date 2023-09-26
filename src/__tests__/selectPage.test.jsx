import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import SelectPage from "../components/selectPage";

describe("Select Box is working properly", () =>{
    const renderComponent = ({fixPages, pageSize, selectChange}) => render(<SelectPage fixPages={fixPages} />);
    it("Select Page component is render", () => {
        render(<SelectPage/>)
    });
    it("Should render div elements", () =>{
        renderComponent({
            fixPages: [6, 10, 15]
        })
        const divElement = screen.getByTestId('pageSize');
        expect(divElement?.tagName).toBe('SELECT');
        
    })
    
})
