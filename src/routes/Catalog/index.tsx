import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import './styles.css';
import CatalogCard from '../../components/CatalogCard';
import BtnCarregarMais from '../../components/BtnCarregarMais';

export default function Catalog(){
    return(
        <>
        <HeaderClient />
        <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard />
          </div>
          <BtnCarregarMais />
        </section>
      </main>
      </>
    )
}