import styles from "../styles/discountSection.module.css"


const BestDiscounts = () => {

    return (
        <div className={`col-12 col-lg-3`}>
            <h2 className={styles.discountTitle}>Best Discounts</h2>
            <div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default BestDiscounts