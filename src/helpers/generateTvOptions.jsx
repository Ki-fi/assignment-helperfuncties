
function tvOptions(product) {
    return product.options.map((option) => {
        if (option.applicable === true) {
            return <span key={option.name}>
                <img src="src/assets/check.png" className="icon" alt="icon"/>{option.name}
            </span>
        } else {
            return <span key={option.name}>
                <img src="src/assets/minus.png" className="icon" alt="icon"/>{option.name}
            </span>
        }
    })
}

export default tvOptions;