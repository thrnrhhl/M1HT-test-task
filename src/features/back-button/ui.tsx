import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    const handleBackRoute = () => navigate(-1);

    return (
        <button onClick={handleBackRoute}>
            <img src="/back-button.svg" alt="back-button" width="24" height="24" />
        </button>
    );
};