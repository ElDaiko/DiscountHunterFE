import Layout from "../components/layout"
import FeaturedGames from "../components/featuredGames"
import FreeGames from "../components/freeGames"
import NewDiscount from "../components/newDiscounts"
import BestDiscounts from "../components/bestDiscounts"
import PopularGames from "../components/popularGames"
import Temp from "../components/temp"
import styleSection from "../styles/discountSection.module.css"

export default function Home() {
    return (
        <Layout className="container">
            <section className="row marginSection">
                <FeaturedGames />
                <Temp/>
                <FreeGames />
            </section>
            <section className={`row ${styleSection.marginColor} `}>
                <NewDiscount/>
                <Temp/>
                <BestDiscounts/>
                <Temp/>
                <PopularGames/>
            </section>
        </Layout>
    )

}