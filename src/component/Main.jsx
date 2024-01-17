import Banner from "./Banner"
import Intro from "./Intro"
const Main=(x)=>{
    return(
        <main>
            <Banner theme={x.theme}></Banner>
            <Intro theme={x.theme}></Intro>
        </main>
    )
}
export default Main