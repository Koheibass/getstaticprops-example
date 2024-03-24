import React from "react";

export default function Home({ data }) {
  return (
    <>
      <h1>ワインリスト？</h1>
      {data.map((wine) => {
        return (
          <div keyt={wine.id}>
            <p>名前：{wine.wine}</p>
            <p>産地：{wine.location}</p>
            <p>ワイナリー：{wine.winery}</p>
            <p>レーティング：{wine.rating.reviews}</p>
            <img src={wine.image} />
          </div >
        )
      })

      }
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.sampleapis.com/wines/reds')
  const data = await response.json();

  return {
    props: { data },
  };
}