export default function Home({ text }) {
  return (
    <div>
      {text}
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      text: "はじめまして！"
    }
  }
}