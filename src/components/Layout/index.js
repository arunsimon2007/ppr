import MobHeaderButton from "../Header/mobHeaderButton";
import MobHeaderNav from "../Header/mobHeaderNav";
import Footer from "../Footer";

const Layout = (props) => (
  <div className={"Layout"}>
    <MobHeaderButton />
    <MobHeaderNav />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
