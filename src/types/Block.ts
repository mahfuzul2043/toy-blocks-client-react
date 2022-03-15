export interface Block {
    id: string;
    type: string;
    attributes: {
        index: number;
        timestamp: number;
        data: string;
        'previous-hash': string;
        hash: string;
    }
}