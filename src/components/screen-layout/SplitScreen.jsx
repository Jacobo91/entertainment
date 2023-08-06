import './SplitScreen.css';

export const SplitScreen = ({
    children
}) => {
    const [Navbar, greeting] = children;
    return(
        <div className="split-container">
            {Navbar}
            {greeting}
        </div>
    );
};