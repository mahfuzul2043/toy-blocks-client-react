import { Block as BlockType } from "../types/Block"
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
    block: BlockType;
}

const BlockWrapper = styled(Box)({
    backgroundColor: grey[300],
    padding: 10,
    marginBottom: 10
})

const Block: React.FC<Props> = ({ block }) => (
    <BlockWrapper>
        <Typography variant='button' color='primary'>00{block.id}</Typography>
        <Typography>{block.attributes.data}</Typography>
    </BlockWrapper>
)

export default Block;