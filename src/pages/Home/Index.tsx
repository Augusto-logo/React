import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const pages = [
    { name: "QR Code Component", path: "/ui-challenges/qr-code" },
    { name: "Product Preview Component", path: "/ui-challenges/product-preview" },
  ];
  return (
    <main className="w-full bg-white">
      <ul>
        {pages.map((page) => (
          <li key={page.name} onClick={() => navigate(page.path)}>
            {page.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
