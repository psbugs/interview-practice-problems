const Shimmer = () => {
    return (
        <>
            <div style={shimmerStyles.shimmercontainer}>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
                <div style={shimmerStyles.s}></div>
            </div>
        </>
    );
};

const shimmerStyles = {
    shimmercontainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
    },
    s: {
        backgroundColor: "#f0f0f0",
        height: "400px",
        weight: "200px",
        margin: "10px",
        padding: "20px",
        borderRadius: "12px",
    },
};

export default Shimmer;
