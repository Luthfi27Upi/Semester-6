import { useRouter } from "next/router";
import React from "react";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Category</h1>

      <h3>Parameter URL:</h3>

      <ul>
        {Array.isArray(slug) &&
          slug.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}