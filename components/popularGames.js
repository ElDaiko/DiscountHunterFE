import styles from "../styles/discountSection.module.css"

const PopularGames = () => {

    return (
        <div className={`col-12 col-lg-4`}>
            <h2 className={styles.discountTitle}>Popular Games</h2>
            <div>   
                <p className="card-text">Some quick example text to build on the card title and make up the bulk.</p>
            </div>
            <div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk.</p>
            </div>
        </div>
    )
}

export default PopularGames