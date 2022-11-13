

import NewRow from "../../components/Web/new/newRow";
const News = () => {
    return ( 
        <>
            <div class="khoangtrong"></div>
            <section class="tintuc">
              <div class="tintuc_in container">
                <div class="khoangtrang_1"></div>
                <section class="sanphamnb">
                  <h2>TIN TỨC</h2>
                  <div class="bottomSpnb"></div>
                </section>
                
                <NewRow />
                <NewRow />
                <NewRow />

                <div class="khoangtrang_1"></div>
              </div>
            </section>
            <div class="khoangtrong"></div>
        </>
     );
}
 
export default News;