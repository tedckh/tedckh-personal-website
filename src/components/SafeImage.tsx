"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  background-image:
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%
    ),
    linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.05) 75%
    );
  background-size: 20px 20px;
`;

type SafeImageProps = {
  src: string;
  alt: string;
};
export default function SafeImage({ src, alt }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) <ImagePlaceholder />;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw 33vw"
      style={{ objectFit: "cover" }}
      onError={() => {
        setHasError(true);
      }}
    />
  );
}
