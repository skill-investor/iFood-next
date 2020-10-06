import { Container } from '../styles/components/Header';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  return (
    <Container>
      <div>
        <span>Entregar em</span>
        <main>
          <h3>Av. Ceará, 1039</h3>
          <FiChevronDown color="#ea1d2c" size={20} />
        </main>
      </div>
    </Container>
  )
}
