import styled from "styled-components";
import * as pallete from '../style/StyledVars.js';

const { cool_gray } = pallete.colors.neutral;

export const Subtitle = styled.p`
    color: ${ cool_gray };
    font-size: 1.2rem;
    margin: .8rem 0 2.5rem 0;
`;