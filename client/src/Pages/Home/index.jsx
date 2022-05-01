import React from 'react';
import { CategoriesCard, Header } from '../../Components';

function Home() {
  return (
    <div>
      <Header />
      <CategoriesCard
        categoryId={1}
        title="تنظيف المنازل"
        imageUrl="https://media.istockphoto.com/photos/the-countdown-to-clean-shiny-floors-picture-id1291180143?b=1&k=20&m=1291180143&s=170667a&w=0&h=Fc66R5Pn_Gs2K1XSKrwqX49aPmVwqINbY_oKqBh5IRo="
        description="يجب علينا دائما أن نتواجد في مكان نظيف ومرتب لذلك نتوقع دائما أن يكون منزلك بهذا الشكل ونتفهم أيضًا أنه قد لا يكون لديك دائمًا الوقت للقيام بذلك بنفسك أو قد لاتكون لديك الصحة للتنظيف. لذلك لدينا فريق مهني لضمان حصولك على منزل نظيف بما يرضيك. ما عليك سوى التقديم للاستفادة من خدماتنا"
      />
    </div>
  );
}
export default Home;
