// write product card here
import ViewProduct from "../components/button";

const Productcard = () => {
  // Static product details
  const productImage = "https://m.media-amazon.com/images/I/61kqXpSm6eL._SY741_.jpg";
  const productName = "Samsung smartfridge";
  const price = "Rs.79,990";
  const product = "https://www.amazon.in/Samsung-Convertible-Inverter-Refrigerator-RS76CG8003S9HL/dp/B0BQC4Y4TP/ref=asc_df_B0BQC4Y4TP/?tag=googleshopdes-21&linkCode=df0&hvadid=709856187081&hvpos=&hvnetw=g&hvrand=16731623517436396513&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9144063&hvtargid=pla-1965837406305&mcid=f96bd0e907493a9aa9699f1076dde0b1&gad_source=1&th=1"

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white text-center">
      <img className="w-full h-40 object-cover" src={productImage} alt="Product" />
      <h2 className="text-xl font-bold mt-2">{productName}</h2>
      <p className="text-gray-600 text-lg">{price}</p>
      <ViewProduct link={product} />
    </div>
  );
};

export default Productcard;
