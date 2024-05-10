export const Square = ({ n }) => {

    const renderBox = (x, w, h) => {
        if (x == 0) {
            return
        }

        return (
            <div
                style={{
                    width: `${w}px`,
                    height: `${h}px`,
                    border: "3px solid red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >{renderBox(x - 1, w - 100, h - 100)}
            </div>
        );
    };
    
    return renderBox(n, 100 * n, 100 * n)
};

