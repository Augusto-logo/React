import productPreviewDesktopImage from "./assets/image-product-desktop.jpg";
import cartIcon from "./assets/icon-cart.svg";

export default function Index() {
  return (
    <main className="flex h-screen items-center justify-center bg-[#F3EAE3]">
      <section className="flex max-w-1/2 items-center rounded-2xl bg-white">
        <div className="">
          <img
            className="rounded-l-2xl object-contain"
            src={productPreviewDesktopImage}
            alt="Product Preview"
          />
        </div>
        <div className="flex flex-col p-8 pl-10">
          <p className="font-montserrat font-bold tracking-[5px] text-gray-500 uppercase">
            Perfume
          </p>
          <h1 className="font-fraunces">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-montserrat text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-4xl font-bold text-[#3D8168]">$149.99</span>
            <span className="text-gray-500 line-through">$169.99</span>
          </div>
          <div className="mt-5">
            <button className="flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#3D8168] font-bold">
              <img src={cartIcon} alt="cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
