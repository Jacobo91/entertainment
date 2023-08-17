import './SplitScreen.css';

export const SplitScreen = ({
    children
}) => {
    console.log("%cstarting splitscreen render", 'color: purple')
    const [Navbar, greeting] = children;
    return(
        <div className="split-container">
            {Navbar}
            {greeting}
        </div>
    );
};