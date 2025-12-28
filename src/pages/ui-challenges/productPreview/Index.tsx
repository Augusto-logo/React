import productPreviewDesktopImage from "./assets/image-product-desktop.jpg";
import productPreviewMobileImage from "./assets/image-product-mobile.jpg"
import cartIcon from "./assets/icon-cart.svg";

export default function Index() {
  
  return (
    <main className="flex h-full py-25 items-center justify-center bg-[#F3EAE3]">

      <section className="h-full max-w-[95%] w-[700px] md:flex items-center rounded-2xl bg-white">
        <div className="w-full overflow-hidden md:rounded-l-2xl rounded-t-2xl">
          <picture>
            <source
              srcSet={productPreviewDesktopImage}
              media="(min-width: 768px)"
            />
            <img
              src={productPreviewMobileImage}
              alt="Product Preview"
            />
          </picture>
        </div>

        <div className="flex flex-col px-10 pb-10 w-fit">
          <p className="font-montserrat tracking-[5px] mt-5 text-sm text-gray-500 uppercase">
            Perfume
          </p>
          <h1 className="font-fraunces text-[clamp(2rem,4vw,2rem)] leading-tight">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-montserrat text-gray-500 text-[clamp(0.95rem,2.2vw,1rem)] leading-relaxed">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-5">
            <span className="font-bold text-[#3D8168] text-[clamp(2rem,2.5vw,1.25rem)]">$149.99</span>
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
