import { motion as m } from "framer-motion";
import styled from "styled-components";
import * as pallete from "../components/style/StyledVars.js";
import successIcon from "../assets/images/icon-thank-you.svg";
import { Link } from "react-router-dom";

const { marine_blue, purplish_blue, pastel_blue, light_blue, strawberry_red } =
    pallete.colors.primary;

const { cool_gray, light_gray, magnolia, alabaster, white } =
    pallete.colors.neutral;

const Container = styled.main`
    margin: 0 auto;
    background: ${white};
    border-radius: 8px;
    padding: 5rem 8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 28px -8px rgba(0, 0, 0, 0.3);

    > h1 {
        margin: 1rem 0 2rem 0;
        color: ${marine_blue};
    }

    > p {
        color: ${cool_gray};
        margin-bottom: 2rem;
    }
`;

export default function Success() {
    const container = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
        },
    };

    const item = {
        hidden: { opacity: 0, y: -15 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <m.main
            variants={container}
            transition="transition"
            initial="hidden"
            animate="show"
            exit="hidden"
            layout
        >
            <Container>
                <m.img
                    src={successIcon}
                    alt="Success"
                    variants={item}
                    initial="hidden"
                    animate="show"
                    transition={{
                        delay: 0.2,
                    }}
                />

                <h1>Thank you!</h1>

                <p>We'll be in touch shortly.. </p>

                <Link to="/">Go to the form again</Link>
            </Container>
        </m.main>
    );
}
