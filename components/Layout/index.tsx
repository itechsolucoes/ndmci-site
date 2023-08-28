//Styles
import {
    FullContent,
    Main,
} from './styles'


//Components
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: JSX.Element,
  auth?: boolean
};

const Layout = ({ children, auth }: Props) => {
  return (
    <FullContent>
        <Header/>

        <Main>
          {children}
        </Main>

        <Footer/>
    </FullContent>
  )
}

export default Layout;