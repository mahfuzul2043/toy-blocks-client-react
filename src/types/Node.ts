import { Block } from "./Block";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  loadingBlocks: boolean;
  blocks: Block[] | null;
  blocksError?: string;
}
