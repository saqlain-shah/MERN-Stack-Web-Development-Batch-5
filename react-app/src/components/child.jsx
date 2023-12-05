

// The ChildComponent receives props as an argument
const ChildComponent = (props) => {
    const data = 60;
    return (
        <div>
            <h2>Child Component</h2>
            {/* Access the data prop passed from the parent */}
            
            <p>Data from Parent: {data}</p>
        </div>
    );
};

export default ChildComponent;
