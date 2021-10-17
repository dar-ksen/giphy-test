import './header.scss';
import Container from '../container';

const Header:React.FC = ({children}) => {
  return (
    <header className="p-3 bg-dark text-white">
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {children}
        </div>
      </Container>
    </header>
  )
}

export default Header;