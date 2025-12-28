import productPreviewDesktopImage from "./assets/image-product-desktop.jpg";
import productPreviewMobileImage from "./assets/image-product-mobile.jpg";
import cartIcon from "./assets/icon-cart.svg";

export default function Index() {
  return (
    <main className="flex h-full items-center justify-center bg-[#F3EAE3] py-25">
      <section className="h-full w-[700px] max-w-[95%] items-center rounded-2xl bg-white md:flex">
        <div className="w-full overflow-hidden rounded-t-2xl md:rounded-l-2xl">
          <picture>
            <source
              srcSet={productPreviewDesktopImage}
              media="(min-width: 768px)"
            />
            <img src={productPreviewMobileImage} alt="Product Preview" />
          </picture>
        </div>

        <div className="flex w-fit flex-col px-10 pb-10">
          <p className="mt-5 font-montserrat text-sm tracking-[5px] text-gray-500 uppercase">
            Perfume
          </p>
          <h1 className="font-fraunces text-[clamp(2rem,4vw,2rem)] leading-tight">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-montserrat text-[clamp(0.95rem,2.2vw,1rem)] leading-relaxed text-gray-500">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-[clamp(2rem,2.5vw,1.25rem)] font-bold text-[#3D8168]">
              $149.99
            </span>
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
