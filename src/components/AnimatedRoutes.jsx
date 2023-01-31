import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route, Router } from "react-router-dom";
import Form from '../pages/Form';
import Success from '../pages/Success';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode={ 'wait' }>
            <Routes location={ location } key={location.pathname}>
                <Route path="/" element={ <Form /> } />
                <Route path="/success" element={ <Success /> } />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;