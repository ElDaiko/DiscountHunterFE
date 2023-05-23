import Layout from "../components/layout"
import styles from "../styles/hunts.module.css"
import GamePreview from "../components/gamePreview";

const Hunts = () => {
    return (
        <Layout>
            <input className={`form-control me-sm-2 ${styles.nav}`} type="search" placeholder="Search" />
            <GamePreview/>
        </Layout>
    );
}

export default Hunts;
