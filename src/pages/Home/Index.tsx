import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className=""
        onClick={() => navigate("/pages/static/productPreview")}
      >
        Go to Product Preview
      </button>
    </div>
  );
}
