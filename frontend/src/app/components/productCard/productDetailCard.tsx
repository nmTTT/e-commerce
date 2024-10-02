import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-2">
        <button>
          <Image
            alt="detail"
            src="/images/image1175.png"
            width={50}
            height={50}
          />
        </button>
        <button>
          <Image
            alt="detail"
            src="/images/productDetail2.png"
            width={50}
            height={50}
          />
        </button>
        <button>
          <Image
            alt="detail"
            src="/images/productDetail3.png"
            width={50}
            height={50}
          />
        </button>
        <button>
          <Image
            alt="detail"
            src="/images/productDetail4.png"
            width={50}
            height={50}
          />
        </button>
      </div>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={300}
          height={300}
          alt="prodDetail"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ProductCard;
