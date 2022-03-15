import { render, screen } from "@testing-library/react"
import { Block as BlockType } from "../types/Block"
import '@testing-library/jest-dom'
import Block from "./Block"

const mockData: BlockType = {
    "id": "5",
    "type": "blocks",
    "attributes": {
        "index": 1,
        "timestamp": 1530679678,
        "data": "The Human Torch",
        "previous-hash": "KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=",
        "hash": "oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc="
    }
};

describe('block component', () => {
    beforeEach(() => {
        render(<Block block={mockData} />)
    })

    it('will render the id of the block', () => {
        expect(screen.queryByText(`00${mockData.id}`)).toBeInTheDocument();
    })

    it('will render the contents of the block on the screen', () => {
        expect(screen.queryByText(mockData.attributes.data)).toBeInTheDocument();
    })
})