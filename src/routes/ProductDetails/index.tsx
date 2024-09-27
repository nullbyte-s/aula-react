import './styles.css';
import BtnAzul from '../../components/BtnAzul';
import BtnBranco from '../../components/BtnBranco';
import HeaderClient from '../../components/HeaderClient';
import ProdutoCard from '../../components/ProdutoCard';

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProdutoCard />
          <div className="dsc-btn-page-container">
            <BtnAzul />
            <BtnBranco />
          </div>
        </section>
      </main>
    </>
  );
}